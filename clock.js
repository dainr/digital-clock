let clock = () => {

    // grab our div to display time
    const clockContainer = document.getElementById('clock');

    // create a holder for our date object
    let date = new Date();

    // get all element of the time
    let hrs = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    // conditional for 12 hour format
    let period = 'AM';
    if (hrs === 0) hrs = 12;

    if(hrs > 12) {
        hrs = hrs - 12;
        period = 'PM';
    }

    if (period === 'AM') {
        clockContainer.style.backgroundImage = 'url("img/daytime.jpg")';
        clockContainer.style.color = '#444';
    } else if (period === 'PM') {
        clockContainer.style.backgroundImage = 'url("img/nighttime.jpg")';
        clockContainer.style.color = '#fff';
    }
    
    // add zero if each time is less than 10
    hrs = hrs < 10 ? `0${hrs}` : hrs;
    mins = mins < 10 ? `0${mins}` : mins;
    secs = secs < 10 ? `0${secs}` : secs;

    let time = `${hrs}:${mins}:${secs}`;

    // show full time by setting our div innertext
   clockContainer.innerText = time;
}


// run this function every second (1000ms) to update the dom
setInterval(clock, 1000);
