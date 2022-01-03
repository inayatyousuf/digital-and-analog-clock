






setInterval(setClock,1000)

const handHour = document.querySelector('[data-hour-hand]');
const handMinute = document.querySelector('[data-minute-hand]');
const handSecond = document.querySelector('[data-second-hand]');

function setClock(){
    const currentDate = new Date();
    const seconds = currentDate.getSeconds()/60;
    const minutes = (seconds + currentDate.getMinutes())/60;
    const hours = (minutes + currentDate.getHours())/12;

    setRotation(handSecond, seconds)
    setRotation(handMinute, minutes)
    setRotation(handHour, hours)
}

function setRotation(element, ratationRatio){
    element.style.setProperty('--rotation', ratationRatio*360)
}

setClock()