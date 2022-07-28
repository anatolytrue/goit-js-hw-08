import Player from '@vimeo/player';

import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);
const LOCALSTORAGE_KEY = "feedback-form-state";

let playerTime = function (time) {
    localStorage.setItem(LOCALSTORAGE_KEY, time.seconds),
    console.log("time", time)
};

player.on('timeupdate', throttle(playerTime, 1000));


const getTime = localStorage.getItem(LOCALSTORAGE_KEY);
player.setCurrentTime(getTime)

