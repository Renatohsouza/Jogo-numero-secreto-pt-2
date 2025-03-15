let listaDenumeroSoteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;


// Função com parâmentro
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Female', {rate:1.2});
}

// Função Exibir Mensagem Inicial
function exibirMensagemInicial() {
    exibirTextoNaTela('h1','Jogo do Número Secreto!');
    exibirTextoNaTela('p','Escolha um Número entre 1 e 10!');
}

exibirMensagemInicial();

// Função sem parâmetro
function verificarChute() {
    let chute = document.querySelector('input').value;

    if(chute == numeroSecreto) {
        exibirTextoNaTela('h1','Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p',mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','O Número secreto é menor!');
        } else {
            exibirTextoNaTela('p','O Número secreto é maior!');
        }
        tentativas++;
        limparCampo();
    }
}

console.log(numeroSecreto);

// Função com Retorno 
function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDenumeroSoteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDenumeroSoteados = [];
    }

    if (listaDenumeroSoteados.includes(numeroEscolhido)) {
        return gerarNumeroAleatorio();
    } else {
        listaDenumeroSoteados.push(numeroEscolhido);
        console.log(listaDenumeroSoteados);
        return numeroEscolhido;
    }
}

// Função limpar Campo
function limparCampo() {
    chute = document.querySelector('input');
    chute .value = '';
}

// Função Reiniciar o Jogo
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

