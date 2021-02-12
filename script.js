function Cronograma() {
    window.document.getElementsByTagName('p')[0].innerText = "Cronograma";
    window.document.getElementsByTagName('caption')[0].innerText = "Cronograma Semanal de Estudo";

    var x = window.document.getElementsByClassName('table_none_block')[0];
    x.style.display = 'block';

    var y = window.document.getElementsByClassName('table_block_none')[0];
    y.style.display = 'none';
}

function Objetivos() {
    window.document.getElementsByTagName('p')[0].innerText = "Objetivos";
    window.document.getElementsByTagName('caption')[0].innerText = "Objetivos do Mês";

    var x = window.document.getElementsByClassName('table_none_block')[0];
    x.style.display = 'none';

    var y = window.document.getElementsByClassName('table_block_none')[0];
    y.style.display = 'block';
}

window.onload = Data;
function Data() {
    dayName = new Array("domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado")
    monName = new Array("janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setembro", "outubro", "novembro", "dezembro")
    now = new Date;

    window.document.getElementsByTagName('p')[1].innerText = "Hoje é " + dayName[now.getDay()] +  ", Dia " + now.getDate ()+ " de " + monName[now.getMonth()] + " de " + now.getFullYear();
}




