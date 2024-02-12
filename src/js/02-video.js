import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const PLAYER_CURRENT_TIME_KEY = 'videoplayer-current-time';

const player = new Player('vimeo-player');
player.setCurrentTime(getPlaybackTime());
player.on('timeupdate', throttle(onSaveCurrentTime, 1000));

/**
 * * Saves playback time to Local Storage
 *
 * @param {number} {object{seconds}} object with time value
 */
function onSaveCurrentTime({ seconds }) {
  localStorage.setItem(PLAYER_CURRENT_TIME_KEY, seconds);
}

/**
 * * Loads stored playback time from Local Storage
 * @returns {number} time value
 * @returns {number} 0 if no data in local storage
 */
function getPlaybackTime() {
  return localStorage.getItem(PLAYER_CURRENT_TIME_KEY) ?? 0;
}
