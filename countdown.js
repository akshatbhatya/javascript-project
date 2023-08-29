function timecalculation() {
    const time = "21 sep 2023 12:00 PM";
    const futuredate = new Date(time);
    console.log(futuredate);
    const nowdate = new Date();
    console.log(nowdate);

    let totalTimeLeft = futuredate - nowdate;
    console.log(totalTimeLeft);


    const onedays = 24 * 60 * 60 * 1000;
    const onehours = 60 * 60 * 1000;
    const oneminutes = 60 * 1000;
    const oneseconds = 1000;
    const days = totalTimeLeft / onedays;

    var futureDays = Math.floor(days);
    console.log(futureDays);
    const hours = totalTimeLeft / onehours;
    var futurehours = Math.floor(hours);
    const minutes = totalTimeLeft / oneminutes;
    var futureminutes = Math.floor(minutes);
    const seconds = totalTimeLeft / oneseconds;
    var futureseconds = Math.floor(seconds)%60;


    const day = document.querySelector('.days');
    const ourhours = document.querySelector('.hours');
    const ourminutes = document.querySelector('.minutes');
    const ourseconds = document.querySelector('.seconds');
    ourseconds.innerHTML = futureseconds;
    ourminutes.innerHTML = futureminutes;
    ourhours.innerHTML = futurehours;
    day.innerHTML = futureDays;

}



setInterval(() => {
    timecalculation();
}, 1000);