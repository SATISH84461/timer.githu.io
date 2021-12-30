document.addEventListener('DOMContentLoaded', () => {
    let num = 0;
    let a = document.getElementById('start');
    a.onclick = function () {
        let b = document.getElementById('start');
        if (num == 0) {
            num++;
            let c = sessionStorage.getItem('x');
            let x = Date.now();
            sessionStorage.setItem('x', x);
            b.innerHTML = 'Stop';
        }
        else if (num == 1) {
            num++;
            let x = sessionStorage.getItem('x');
            let y = Date.now();
            b.innerHTML = "RESET";
        }
        else {
            num = 0;
            let c = document.getElementById('h-m-sec');
            c.innerHTML = 0;
            c = document.getElementById('h-sec');
            c.innerHTML = 0;
            c = document.getElementById('h-min');
            c.innerHTML = 0;
            b.innerHTML = "Start";
        }
    }
    function tim() {
        let x = sessionStorage.getItem('x');
        let y = Date.now();
        let b = document.getElementById('h-m-sec');
        b.innerHTML = (y - x) % 1000;
        b = document.getElementById('h-sec');
        b.innerHTML = (Math.floor((y - x) / 1000)) % 60;
        b = document.getElementById('h-min');
        b.innerHTML = Math.floor((Math.floor((y - x) / 1000)) / 60);
    }
    setInterval(function () {
        if (num == 1) {
            tim();
        }
    }, 1);
});     