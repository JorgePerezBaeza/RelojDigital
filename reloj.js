    setInterval(() =>{
        let horas = document.getElementById('horas');
        let minutos = document.getElementById('minutos');
        let segundos = document.getElementById('segundos');
        let ampm = document.getElementById('ampm');

        let hh = document.getElementById('hh');
        let mm = document.getElementById('mm');
        let ss = document.getElementById('ss');

        let hr_dot = document.querySelector('.hr_dot');
        let min_dot = document.querySelector('.min_dot');
        let sec_dot = document.querySelector('.sec_dot');
            
        let h = new Date().getHours();
        let m = new Date().getMinutes();
        let s = new Date().getSeconds();
        let am = h >= 12 ? "PM" : "AM";

        //Convertir formato de 24h a 12h
        if (h > 12){
            h = h -12;
        }
        // Agregar cero (0) antes de un numero de un digito, 8:30 = 08:30
        h = (h < 10) ? "0" + h : h;
        m = (m < 10) ? "0" + m : m;
        s = (s < 10) ? "0" + s : s;

        horas.innerHTML = h + "<br><span >Horas</span>";
        minutos.innerHTML = m + "<br><span >Minutos</span>";
        segundos.innerHTML = s + "<br><span >Segundos</span>";
        ampm.innerHTML = am;

        hh.style.strokeDashoffset = 440 - (440 * h) / 12; //12 horas
        mm.style.strokeDashoffset = 440 - (440 * m) / 60; //60 minutos
        ss.style.strokeDashoffset = 440 - (440 * s) / 60; //60 segundos

        hr_dot.style.transform = `rotate(${h * 30}deg)`;//360 / 12 = 30
        min_dot.style.transform = `rotate(${m * 6}deg)`;//360 / 60 = 6
        sec_dot.style.transform = `rotate(${s * 6}deg)`;//360 / 60 = 6
    })      