import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';
import changeModalState from './modules/changeModalState';
import timer from './modules/timer';

/* Скрипт запускается, только когда DOM структура (вёрстка сайта) полностью готова */
window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    /* Объект сбора данных, выбранные пользователем */
    let modalState = {};

    /* Дата дедлайна */
    let dedline = '2021-01-01';

    /* Подключаем скрипт модального окна */
    changeModalState(modalState);
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    tabs('.balcon_icons', '.balcon_icons_img', '.big_img > img', 'do_image_more', 'inline-block');
    forms(modalState);
    timer('.container1', dedline);
});