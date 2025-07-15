const clock = document.getElementById('clock');

setInterval(function(){
    let date = new Date();
    const time = date.toLocaleTimeString();
    clock.innerHTML = time;
}, 1000)