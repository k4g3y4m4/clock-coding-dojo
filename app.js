function getSecondsSinceStartOfDay() {
    return new Date().getSeconds() + 
      new Date().getMinutes() * 60 + 
      new Date().getHours() * 3600;
}

let getTime = () => {
    let timeNow = getSecondsSinceStartOfDay();
   
    let timeHours = Math.floor(timeNow / 3600);
    var hour = document.querySelector('#hour');
    hour.style.transform = `rotate(${timeHours * 30 + 180}deg)`;
    
    let timeMinutes = Math.floor((timeNow % 3600) / 60);
    var minutes = document.querySelector('#minutes');
    minutes.style.transform = `rotate(${timeMinutes * 6 + 180}deg)`;

    let timeSeconds = Math.floor(timeNow % 60);
    var seconds = document.querySelector('#seconds');
    seconds.style.transform = `rotate(${timeSeconds * 6 + 180}deg)`;

    let digits = document.querySelector('.digits');
    html =  timeHours + ':' + timeMinutes + ':' + timeSeconds;
    digits.innerHTML = html;
    console.log(digits.innerHTML);
}


setInterval(getTime, 1000);
