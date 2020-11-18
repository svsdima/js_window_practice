const modals = () => {
    /* Привязка модального окна к триггеру */
    function bindModal(triggerSelector, modalSelector, closeSelector) {
        const trigger = document.querySelectorAll(triggerSelector),
              modal = document.querySelector(modalSelector),
              close = document.querySelector(closeSelector);


        /* При клике на триггер, открывается модальное окно */
        /* forEach существует, если использовался querySelectorAll */
        trigger.forEach(item => {
            item.addEventListener('click', (e) => {
                /* Сбрасываем стандартное поведение */
                if (e.target) {
                    e.preventDefault();
                }
                /* Включаем отображение окна */
                modal.style.display = 'block';
                /* Отключаем скроллинг страницы при вызове окна */
                document.body.style.overflow = "hidden";
                // document.body.classList.add('modal-open');
            });
        });

        /* При клике на крестик, закрываем модальное окно */
        close.addEventListener('click', () => {
            /* Отключаем отображение окна */
            modal.style.display = 'none';
            /* Включаем скроллинг страницы при закрытии окна */
            document.body.style.overflow = "";
            // document.body.classList.remove('modal-open');
        });

        /* При клике в тёмную область (за границей модального окна), модальное окно будет закрываться */
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                /* Отключаем отображение окна */
                modal.style.display = 'none';
                /* Включаем скроллинг страницы при закрытии окна */
                document.body.style.overflow = "";
                // document.body.classList.remove('modal-open');
            }
        });
    }

    /* Показываем модальное окно спустя определённый промежуток времени */
    function showModalByTime(selector, time) {
        setTimeout(function() {
            document.querySelector(selector).style.display = 'block';
            /* Отключаем скроллинг страницы при вызове окна */
            document.body.style.overflow = "hidden";
        }, time);
    }

    /* Включаем скрипт не забывая прописывать селекторы */
    bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    bindModal('.phone_link', '.popup', '.popup .popup_close');
    showModalByTime('.popup', 60000);
};


export default modals;