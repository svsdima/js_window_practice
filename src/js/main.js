import './slider';
import modals from './modules/modals';
import tabs from './modules/tabs';
import forms from './modules/forms';

/* Скрипт запускается, только когда DOM структура (вёрстка сайта) полностью готова */
window.addEventListener('DOMContentLoaded', () => {
    "use strict";
    /* Подключаем скрипт модального окна */
    modals();
    tabs('.glazing_slider', '.glazing_block', '.glazing_content', 'active');
    tabs('.decoration_slider', '.no_click', '.decoration_content > div > div', 'after_click');
    forms();
});