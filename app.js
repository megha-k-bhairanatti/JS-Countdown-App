const countdown = () =>{
    const countDate = new Date('Aug 5, 2021 00:00:00').getTime();
    // console.log(countDate);

    const currentTime = new Date().getTime();

    const gap = countDate - currentTime;
    
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(gap / day);
    const textHour = Math.floor((gap % day) / hour);
    const textMinute = Math.floor((gap % hour) / minute);
    const textSecond = Math.floor((gap % minute) / second);

    // console.log(textDay);
    console.log(gap);
    document.querySelector(".day").innerText = textDay;
    document.querySelector(".hour").innerText = textHour;
    document.querySelector(".minute").innerText = textMinute;
    document.querySelector(".second").innerText = textSecond;


    if(gap < 1000){
        document.querySelector(".countdown").style.display = 'none';
        document.querySelector(".countdownText").innerText = "Voila! We are open!"
    }
}


// run the function every single second
setInterval(countdown, 1000);

