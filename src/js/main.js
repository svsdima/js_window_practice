import './slider';
import modals from './modules/modals';

/* Скрипт запускается, только когда DOM структура (вёрстка сайта) полностью готова */
window.addEventListener('DOMContentLoaded', () => {
    /* Подключаем скрипт модального окна */
    modals();
});