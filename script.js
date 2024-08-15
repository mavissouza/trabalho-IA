const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Pergunta 1"
    alternativas: [
       "Alternativa 1",
       "Alternativa 2"
  ]
},
{

   "Pergunta 2"
   alternativas: [
      "Alternativa 1",
      "Alternativa 2"
 ]
},
{

   "Pergunta 3"
   alternativas: [
      "Alternativa 1",
      "Alternativa 2"
 ]
},
{

   "Pergunta 4"
   alternativas: [
      "Alternativa 1",
      "Alternativa 2"
 ]
},
{

   "Pergunta 5"
   alternativas: [
      "Alternativa 1",
      "Alternativa 2"
 ]
 }
];
   
let atual = 0;
let perguntaAtual;

function mostraPergunta(){

}