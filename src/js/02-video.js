import Player from '@vimeo/player';

import throttle from "lodash.throttle";

const iframe = document.querySelector('#vimeo-player');
const player = new Player(iframe);

let playerTime = function (time) {
    localStorage.setItem("videoplayer-current-time", time.seconds),
    console.log("time", time)
};

player.on('timeupdate', throttle(playerTime, 1000));


const getTime = localStorage.getItem('videoplayer-current-time');
player.setCurrentTime(getTime)

