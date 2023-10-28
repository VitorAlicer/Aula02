const comprouLeite = true;
const comprouBiscoito = false;

const diogoCumpriuMissao = comprouLeite && comprouBiscoito;

if (diogoCumpriuMissao){
    console.log("sim");
} else {
    console.log("não");
}

const diogoFezAlgo = comprouLeite || comprouBiscoito;

if(diogoFezAlgo){
    console.log("Diogo fez algo");
}else {
    console.log("Diogo não fez nada");
}