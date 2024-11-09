let quantidadeVitorias = 100;
let quantidadeDerrotas = 11;
let nivel;

let resultado = calcularPartidas(quantidadeVitorias, quantidadeDerrotas);

function calcularPartidas(quantidadeVitorias, quantidadeDerrotas) {
    let saldoRanking = quantidadeVitorias - quantidadeDerrotas;
    return saldoRanking;
}

if (quantidadeVitorias <= 10) {
    nivel = "Ferro";
}
else if (quantidadeVitorias >= 11 && quantidadeVitorias <= 20) {
    nivel = "Bronze";
}
else if (quantidadeVitorias >= 21 && quantidadeVitorias <= 50) {
    nivel = "Prata";
}
else if (quantidadeVitorias >= 51 && quantidadeVitorias <= 80) {
    nivel = "Ouro";
}else if (quantidadeVitorias >= 81 && quantidadeVitorias <= 90) {
    nivel = "Diamante";
}else if (quantidadeVitorias >= 91 && quantidadeVitorias <= 100) {
    nivel = "Lendário";
}
else {
    nivel = "Imortal";
}

console.log("O Herói tem de saldo de " + resultado + " está no nível de " + nivel + ".");