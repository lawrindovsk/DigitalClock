//JavaScript

//Declarando variáveis e pegando horas, minutos e segundos.
let horas = document.getElementById('horas');
let minutos = document.getElementById('minutos');
let segundos = document.getElementById('segundos');
let ampm = document.getElementById('ampm');






setInterval(() => {
    
    //Pegando horas, minutos e segundos atráve=s do pc.
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    //Aqui eu faço comparação entre PM e AM, então se a hora for maior que 12, aparece na tela PM, se não ele retorna AM.
    let amdDmd = h >= 12 ? 'PM' : 'AM'


    //Convertendo 24 horas para 12 Horas.

    if (h > 12) {
    h = h - 12;
    }


    //Adicionando zero antes de um único número.    

    h = (h < 10) ? '0' + h : h;
    h = (h < 10) ? '0' + m : m;
    h = (h < 10) ? '0' + s : s;




    //Inserindo informaões no html, ou seja, eu to dizendo pra ele colocar essas 3 variáveis e inserir através desse método.
    horas.innerHTML = h + '<br><span>Horas</span>';
    minutos.innerhtml = m + '<br><span>Minutos</span>';;
    segundos.innerHTML = s + '<br><span>Segundos</span>';;
    ampm.innerHTML = amdDmd;
})
