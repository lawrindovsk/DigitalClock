//JavaScript

//Declarando variáveis e pegando horas, minutos e segundos.
let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let ampm = document.getElementById('ampm');

let hh = document.getElementById('hh');
let mm = document.getElementById('mm');
let ss = document.getElementById('ss');

let hr_ponto = document.querySelector('.hr_ponto');
let min_ponto = document.querySelector('.min_ponto');
let seg_ponto = document.querySelector('.seg_ponto');


setInterval(() => {
    
    //Pegando horas, minutos e segundos atráve=s do pc.
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    let amdDmd = h >= 12 ? 'PM' : 'AM' //Aqui eu faço comparação entre PM e AM, então se a hora for maior que 12, aparece na tela PM, se não ele retorna AM.

    //Convertendo 24 horas para 12 Horas.
    if (h > 12){
    h = h - 12
    }

    //Adicionando zero antes de um único número.    
    h = (h < 10) ? '0' + h : h;
    m = (m < 10) ? '0' + m : m;
    s = (s < 10) ? '0' + s : s;

    //Inserindo informaões no html, ou seja, eu to dizendo pra ele colocar essas 3 variáveis e inserir através desse método.
    horas.innerHTML = h + '<br><span>Horas</span>';
    minutos.innerhtml = m + '<br><span>Minutos</span>';
    segundos.innerHTML = s + '<br><span>Segundos</span>';
    ampm.innerHTML = amdDmd;

    //Animações em Java.
    hh.style.strokeDashoffset = 440 - (400 * h) / 12;
    hh.style.strokeDashoffset = 440 - (400 * m) / 60;
    hh.style.strokeDashoffset = 440 - (400 * s) / 60;


    // Fiz o calculo de 360 (tamanho do circulo) e dividi por 12 = 30. Assim o ponto acompanha o circulo de acordo com a hora.
    hr_ponto.style.transform = `rotate(${h * 30}deg)`
    // 360 / 60 = 6
    min_ponto.style.transform = `rotate(${h * 6}deg)`
    // 360 / 60 = 6
    seg_ponto.style.transform = `rotate(${h * 6}deg)`



})
