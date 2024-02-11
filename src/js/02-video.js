import 'https://player.vimeo.com/api/player.js';
import throttle from 'lodash.throttle';

const VIDEO_PLAYER_CURRENT_TIME_KEY = 'videoplayer-current-time';
let currentVideoId;

const player = new Vimeo.Player(document.getElementById('vimeo-player'));

player.on('loaded', onLoaded);
player.on('timeupdate', throttle(onSaveCurrentTime, 1000, { trailing: false }));
player.on('pause', onSaveCurrentTime);
player.on('ended', onResetPlaybackTime);

function onLoaded({ id }) {
  currentVideoId = id;
  const currentTime = getPlaybackTime(id);
  player
    .setCurrentTime(currentTime)
    .catch(error => onPlayerSetTimeError(error, currentTime));
}

function onSaveCurrentTime({ seconds }) {
  saveTimeToStorage(seconds);
}

function onResetPlaybackTime() {
  saveTimeToStorage(0);
}

function onPlayerSetTimeError(error, time) {
  switch (error.name) {
    case 'RangeError': {
      console.error(
        'RangeError:\n' +
          `Stored video playback time is set to '${time}' seconds.\n` +
          'The time is less than 0 or greater than the video’s duration.'
      );
      onResetPlaybackTime();
      break;
    }
    default: {
      console.error(error);
      break;
    }
  }
}

function getPlaybackTime(id) {
  const playbacks = getStoredPlaybacks();
  return playbacks[id] ?? 0;
}

function saveTimeToStorage(time) {
  const playbacks = getStoredPlaybacks();
  playbacks[currentVideoId] = time;
  localStorage.setItem(
    VIDEO_PLAYER_CURRENT_TIME_KEY,
    JSON.stringify({ [currentVideoId]: time })
  );
}

function getStoredPlaybacks() {
  return JSON.parse(localStorage.getItem(VIDEO_PLAYER_CURRENT_TIME_KEY)) ?? {};
}
