let a;
let date;
let time;
let timeis;
let secends
setInterval(() => {
    a = new Date;
    date = a.toLocaleDateString();
    secends = a.getSeconds();
    time = a.getHours() + " : " + a.getMinutes() + " : " + a.getSeconds();
    timeis = document.getElementById("cti");
    timeis.innerHTML = "Current Time is " + time + " on date " + date;
}, 0);
