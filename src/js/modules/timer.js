const timer = (id, dedline) => {
    
    /* Если значение меньше 10-ти подставляется ноль (09, 08...) */
    const addZero = (num) => {
        if (num <= 9) {
            return "0" + num;
        } else {
            return num;
        }
    }
    
    /* Получение времени */
    const getTimeRemaining = (endtime) => {
        const t = Date.parse(endtime) - Date.parse(new Date()), //Миллисекунды
              seconds = Math.floor((t/1000) % 60), //Секунды
              minutes = Math.floor((t/1000/60) % 60), //Минуты
              hours = Math.floor((t/(1000/60/60)) % 24), //Часы
              days = Math.floor((t/1000/60/60/24)); //Дни

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        }
    }

    const setClock = (selector, endtime) => {
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'),
              hours = timer.querySelector('#hours'),
              minutes = timer.querySelector('#minutes'),
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);

        /* Вызываю обновление интервала заранее, чтоб не было бага при загрузке */
        updateClock();
            
        /* Определяет сколько времени осталось до дедлайна и обновляет таймер */
        function updateClock() {
            const t = getTimeRemaining(endtime);

            days.textContent = addZero(t.days);
            hours.textContent = addZero(t.hours);
            minutes.textContent = addZero(t.minutes);
            seconds.textContent = addZero(t.seconds);

            /* Если время закончится, таймер остановится */
            if (t.total <= 0) {
                days.textContent = "00";
                hours.textContent = "00";
                minutes.textContent = "00";
                seconds.textContent = "00";      
                
                clearInterval(timeInterval);
            }
        }
    }

    setClock(id, dedline);
}

export default timer;