export const timer = (deadline) => {
    const timerDays = document.querySelectorAll(".count_1>span");
    const timerHours = document.querySelectorAll(".count_2>span");
    const timerMinutes = document.querySelectorAll(".count_3>span");
    const timerSeconds = document.querySelectorAll(".count_4>span");
    let saleLabel = document.querySelectorAll(".countdown-text");

    let idInterval;

    const getTimeRemain = () => {
        let dateStop = new Date(deadline).getTime();
        let dateNow = new Date().getTime();
        let timeRemain = (dateStop - dateNow)/1000;
    
        let hours = Math.floor((timeRemain/60/60)%24);
        let minutes = Math.floor((timeRemain/60)%60);
        let seconds = Math.floor(timeRemain%60);
        let days = Math.floor(timeRemain/60/60/24);
        
        return {timeRemain, hours, minutes, seconds, days};
        
    };

    const updateClock = () => {
        let getTime = getTimeRemain();
        if(getTime.timeRemain <= 0){
            clearInterval(idInterval);
            let newStr = "Акция закончилась!";
            saleLabel.forEach(label => {
                label.innerHTML = newStr + label.innerHTML.substring(24);
            });
        }
        if(getTime.hours < 10){
            getTime.hours = "0" + getTime.hours;
        } 
         if(getTime.minutes < 10){
            getTime.minutes = "0" + getTime.minutes;
        } 
         if(getTime.seconds < 10){
            getTime.seconds = "0" + getTime.seconds;
        } 
         if(getTime.days < 10){
            getTime.days = "0" + getTime.days;
        }
        
        timerDays.forEach(timer => {
            timer.textContent = getTime.days;
        });
        timerHours.forEach(timer => {
            timer.textContent = getTime.hours;
        });
        timerMinutes.forEach(timer => {
            timer.textContent = getTime.minutes;
        });
        timerSeconds.forEach(timer => {
            timer.textContent = getTime.seconds;
        });

        // if (getTime.timeRemain > 0){
        //     setTimeout(updateClock, 1000);
        // }
    };
    
    const startTimer = () => {
        let getTime = getTimeRemain();
        if (getTime.timeRemain > 0){
            idInterval = setInterval(updateClock, 1000);
        } else {
            timerDays.forEach(timer => {
                timer.textContent = "00";
            });
            timerHours.forEach(timer => {
                timer.textContent = "00";
            });
            timerMinutes.forEach(timer => {
                timer.textContent = "00";
            });
            timerSeconds.forEach(timer => {
                timer.textContent = "00";
            });

            let newStr = "Акция закончилась!";
            saleLabel.forEach(label => {
                label.innerHTML = newStr + label.innerHTML.substring(24);
            });
        }
    };
    startTimer();
};