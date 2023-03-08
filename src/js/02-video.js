// Импортируем в файл:
import throttle from "lodash.throttle";
import Player from '@vimeo/player';
import * as storage from '../storage/localStorage';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const CURRENT_TIME_PLAYER = 'videoplayer-current-time';
const onPlay = function (data) {
    storage.save(CURRENT_TIME_PLAYER, JSON.stringify(data.seconds));
};
player.on('timeupdate', throttle(onPlay, 1000));
player.setCurrentTime(JSON.parse(storage.get(CURRENT_TIME_PLAYER)) || 0);