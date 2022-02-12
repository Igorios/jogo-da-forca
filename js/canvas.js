
var tela = document.querySelector("canvas");
var pincel = tela.getContext("2d");

function desenhaCabeca() {
    pincel.beginPath();
    pincel.arc(200, 100, 50, 0, 2 * Math.PI);
    pincel.stroke();
}

function desenhaCorpo() {
    pincel.lineWidth = 1;
    pincel.beginPath();
    pincel.moveTo(200,390);
    pincel.lineTo(200,150);
    pincel.fill();
    pincel.stroke();
}

function desenhaBracoDireito() {
    pincel.lineWidth = 1;
    pincel.beginPath();
    pincel.moveTo(200, 250); // x, y 
    pincel.lineTo(350, 150); // x, y
    pincel.fill();
    pincel.stroke();
}

function desenhaBracoEsquerdo() {
    pincel.lineWidth = 1;
    pincel.beginPath();
    pincel.moveTo(45, 200); // x, y 
    pincel.lineTo(200, 250); // x, y
    pincel.fill();
    pincel.stroke();
}

function desenhaPernaDireita() {
    pincel.lineWidth = 1;
    pincel.beginPath();
    pincel.moveTo(200, 390); // x, y 
    pincel.lineTo(300, 500); // x, y
    pincel.fill();
    pincel.stroke();
}

function desenhaPernaEsquerda() {
    pincel.lineWidth = 1;
    pincel.beginPath();
    pincel.moveTo(200, 390); // x, y 
    pincel.lineTo(100, 500); // x, y
    pincel.fill();
    pincel.stroke();
}

// desenhaCabeca();
// desenhaCorpo();
// desenhaBracoDireito();
// desenhaBracoEsquerdo();
// desenhaPernaDireita();
// desenhaPernaEsquerda();