const filmes = [
{nome: "Sniper americano", anoLancamento: 2006},
{nome: "Operação BigHero", anoLancamento: 2015},
{nome: "Os Vingadores", anoLancamento: 2018}]

console.log("filme favorito " + filmes[0].nome);
console.log("Ano de lançamento: " + filmes[0].anoLancamento);

const dataAtual = new Date();
const anoAtual = dataAtual.getFullYear();

const dataNascimento = new Date(2000,4,12);
const anoNascimento = dataNascimento.getFullYear();

const idade = anoAtual - anoNascimento;
if (idade){
    console.log("Sua idade é " + idade + " Anos");
}

const musicas = [
    {nome: "Lose Yourself", Artista: "Eminem"},
    {nome: "Mockingbird", Artista: "Eminem"},
    {nome: "Not Afraid", Artista: "Eminem"},];
musicas.push (
    {nome: "Collapse", Artista: "Eminem"},
    {nome: "The monster", Artista: "Eminem"});
for (var i = 0; i < musicas.length; i++){
    console.log(musicas[i].nome);
    console.log(musicas[i].Artista);
}
