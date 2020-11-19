/* Работа с табами (вкладками) на странице */
const tabs = (headerSelector, tabSelector, contentSelector, activeClass, display = 'block') => {
    const header = document.querySelector(headerSelector),
          tab = document.querySelectorAll(tabSelector),
          content = document.querySelectorAll(contentSelector);
    
    /* Скрытие табов */
    function hideTabContent() {
        /* Скрываем контент */
        content.forEach(item => {
            item.style.display = 'none';
        });

        /* Убираем класс активности */
        tab.forEach(item => {
            item.classList.remove(activeClass);
        })
    }

    /* Показ таба */
    function showTabContent(i = 0) {
        /* Показываем контент */
        content[i].style.display = display;

        /* Добавляем класс активности */
        tab[i].classList.add(activeClass);

    }

    /* Включаю функции */
    hideTabContent();
    showTabContent();


    /* Отслеживаем на какой таб кликнул пользователь, для этого использую диллегирование событий */
    header.addEventListener('click', (e) => {
        const target = e.target;
        /* Если кликнули точно в нужный нам таб, определяем в какой именно счёт мы кликнули */
        if (target && 
            (target.classList.contains(tabSelector.replace(/\./, "")) || 
            target.parentNode.classList.contains(tabSelector.replace(/\./, "")))) {
            tab.forEach((item, i) => {
                /* Если таб в который кликнул пользователь равен item, который перебирается или родитель равен item, то берём и используем индекс, который к нам пришёл */
                if (target == item || target.parentNode == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
}

export default tabs;