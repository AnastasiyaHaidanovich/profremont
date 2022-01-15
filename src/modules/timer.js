const timer = (deadline) => {
    const timerDays = document.querySelector(".count_1>span");
    const timerHours = document.querySelector(".count_2>span");
    const timerMinutes = document.querySelector(".count_3>span");
    const timerSeconds = document.querySelector(".count_4>span");

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
        
        timerDays.textContent = getTime.days;
        timerHours.textContent = getTime.hours;
        timerMinutes.textContent = getTime.minutes;
        timerSeconds.textContent = getTime.seconds;

        // if (getTime.timeRemain > 0){
        //     setTimeout(updateClock, 1000);
        // }
    };
    
    const startTimer = () => {
        let getTime = getTimeRemain();
    if (getTime.timeRemain > 0){
            setInterval(updateClock, 1000);
        }
    };
    startTimer();
};

export default timer;