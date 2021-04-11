const start = document.querySelector('#start')
const Stop = document.getElementById('stop')
const reset = document.querySelector('#reset')

const seconds = document.querySelector('#seconds')
const minutes = document.querySelector('#minutes')


let second = 00;
let minute = 00;


let interval;





start.addEventListener('click', (e) => {

    clearInterval(interval);
    e.preventDefault();
    interval = setInterval(startTimer, 1000)

})


Stop.addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(interval);

})



reset.addEventListener('click', (e) => {
    e.preventDefault();
    clearInterval(interval);
    second = "00";
    minute = "00";

    seconds.innerText = second;
    minutes.innerText = minute;



})

function startTimer() {

    second += 1;

    if (second <= 9) {

        return seconds.innerText = "0" + second;
    }

    if (second > 9 && second < 60) {

        return seconds.innerText = second;
    }

    if (second >= 60) {

        minute += 1;
        minutes.innerText = "0" + minute;
        second = 0;
        seconds.innerText = "0" + second;
    }

    if (minute > 9) {
        minutes.innerText = minute;
    }

}




