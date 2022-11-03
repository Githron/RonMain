(function () {
    const second =1000,
    minute= second*60,
    hour = minute*60,
    day = hour*24;

let birthday = " dec 29, 2022 00:00:00",
countdown = new
Date(birthday).getTime(),
x=setInterval(function () {

    let now= new Date().getTime(),
    distance = countdown - now;

document.getElementById("days").innerText =
Math.floor(distance/(day)),

document.getElementById("days").innerText =
Math.floor((distance%(day)) / (hour)),

document.getElementById("days").innerText =
Math.floor((distance%(hour)) / (minute)),

document.getElementById("days").innerText =
Math.floor((distance%(minute)) / (second)


// when the date is reached


if(distance<0){
    let headline =
    document.getElementById("headline"),


    countdown =
    document.getElementById("countdown")
content =
document.getElementById("content");
headline.innerText="its my day"
clearInterval(x);


    }




},0)


}());