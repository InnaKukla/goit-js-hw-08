const throttle = require('lodash.throttle');
import Player from "@vimeo/player";



const iframe = document.querySelector('iframe')

const player = new Player(iframe);
const NAME_LOCAL_STORAGE = "videoplayer-current-time";


player.on('timeupdate', throttle(function (data) {
    localStorage.setItem(NAME_LOCAL_STORAGE, data.seconds)
}, 1000));

const time = localStorage.getItem(NAME_LOCAL_STORAGE)
player.setCurrentTime(time).then(function(seconds) {
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
}); 