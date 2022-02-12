
var tentativas = 6;
var novaLista = [];
var palavraSorteada;

const palavraDaLista = [
    palavra01 = {
        nome: "BOLA"
    },

    palavra02 = {
        nome: "CAVALO"
    },

    palavra03 = {
        nome: "CAMISA"
    },

    palavra04 = {
        nome: "MELANCIA"
    }

];

sorteandoPalavra();
function sorteandoPalavra() {

    var palavraRandomica = parseInt(Math.random() * palavraDaLista.length);

    palavraSorteada = palavraDaLista[palavraRandomica].nome;

}

function verificaLetraEscolhida(letra){

    if (tentativas > 0) {

        mudarStyleLetra("tecla-" + letra);  
        comparaLista(letra);
        colocandoNaTela();
    }

}

colocandoNaTela();
function colocandoNaTela() {

    var palavraSecreta = document.querySelector(".palavraSecreta");

    palavraSecreta.innerHTML = "";

    for (var i = 0; i < palavraSorteada.length; i++) {

        if (novaLista[i] == undefined) {
            novaLista[i] = "&nbsp;";
            palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<p class='letraSecreta'>" + novaLista[i] + "</p>";
        } else {
            palavraSecreta.innerHTML = palavraSecreta.innerHTML + "<p class='letraSecreta'>" + novaLista[i] + "</p>";
        }

    }


}
function mudarStyleLetra(tecla){

    document.getElementById(tecla).style.background = "red";
    document.getElementById(tecla).style.color = "#ffffff";
}



function comparaLista(letra) {

    var posicao = palavraSorteada.indexOf(letra);
    if (posicao < 0) {
        tentativas--;
        pegaCanvas();
    } else {
        for (var i = 0; i < palavraSorteada.length; i++) {

            if (palavraSorteada[i] == letra) {
                novaLista[i] = letra;
            }
        }
    }

    var vitoria = true;
    for (var i = 0; i < palavraSorteada.length; i++) {
        
        if (palavraSorteada[i] != novaLista[i]) {
            vitoria = false;
        }
    }

    if (vitoria == true) {
        alert("Você ganhou");
        tentativas = 0;
    }

}

function pegaCanvas() {
    switch(tentativas) {
        case 5:
            desenhaCabeca();
            break;
        case 4:
            desenhaCorpo();
            break
        case 3:
            desenhaBracoDireito();
            break;
        case 2:
            desenhaBracoEsquerdo();
            break;
        case 1: 
            desenhaPernaDireita();
            break;
        case 0:
            desenhaPernaEsquerda();
            alert("Você perdeu");
            break;                      
    }
}