import checkNumInputs from './checkNumInputs';

/* Работа с формами отправки данных */
const forms = (state) => {
    const form = document.querySelectorAll('form'),
          inputs = document.querySelectorAll('input'); /* Инпут нужен, чтобы очищать инпуты после отправки на сервер */

    checkNumInputs('input[name="user_phone"]');

    /* Оповещения */
    const message = {
        loading: 'Загрузка...',
        success: 'Спасибо! Скоро мы с вами свяжемся.',
        failury: 'Что-то пошло не так...'
    }

    /* Отправка формы на сервер */
    const postData = async (url, data) => {
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: "POST",
            body: data
        });

        return await res.text();
    }

    /* Очищаем инпуты */
    const clearInputs = () => {
        inputs.forEach(item => {
            item.value = '';
        })
    }

    /* Форма отправки данных без перезагрузки страницы */
    form.forEach(item => {
        item.addEventListener('submit', (e) => {
            e.preventDefault();

            /* Оповещение пользователя */
            let statusMessage = document.createElement('div');
            statusMessage.classList.add('status');
            item.appendChild(statusMessage); /* Помещаем блок в конец формы */

            /* Собираем все данные формы */
            const formData = new FormData(item);
            if (item.getAttribute('data-calc') === "end") {
                for (let key in state) {
                    formData.append(key, state[key]);
                }
            }

            /* Отправляем запрос на сервер с данными, которые были получены */
            postData('assets/server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
        });
    });
}

export default forms;