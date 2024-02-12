import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER_CURRENT_TIME_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player');
player.setCurrentTime(getPlaybackTime());
player.on('timeupdate', throttle(onSaveCurrentTime, 1000));

function onSaveCurrentTime({ seconds }) {
  localStorage.setItem(PLAYER_CURRENT_TIME_KEY, seconds);
}

function getPlaybackTime() {
  return localStorage.getItem(PLAYER_CURRENT_TIME_KEY) ?? 0;
}
