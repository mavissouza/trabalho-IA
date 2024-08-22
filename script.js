const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
{
    enunciado: "Para o que serve a Inteligência Artificial?",
    alternativas: [
      {
         texto: "Para as máquinas nos dominarem",
         afirmação: "afirmação"
      },
      {
         texto: "Para as máquinas se desenvolverem e realizarem atividades humanas de forma autônoma",
         afirmação: "afirmação"
      }
  ]
},
{

   enunciado: "No que a Inteligência Artificial nos ajuda?",
   alternativas: [
      {
         texto: "Nos ajuda a realizar tarefas autônomas, como dirigir carros, fazer pesquisas avançadas, diagnosticar doenças, identificar criminosos, entre outras funcionalidades",
         afirmação: "afirmação"
      },
      {
         texto: "Nos ajuda a colar em provas e atividades"
         afirmção: "afirmação"
      }
     
 ]
},
{

   enunciado: "Pergunta 3",
   alternativas: [
      "Alternativa 1",
      "Alternativa 2"
 ]
},
{

   enunciado: "Pergunta 4",
   alternativas: [
      "Alternativa 1",
      "Alternativa 2"
 ]
},
{

   enunciado: "Pergunta 5",
   alternativas: [
      "Alternativa 1",
      "Alternativa 2"
 ]
 },
];
   
let atual = 0;
let perguntaAtual;

function mostraPergunta(){
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   mostraAlternativa();
}

function mostraPergunta(){
  for(const alternativa of perguntaAtual.alternativas){
   const botaoAlternativa = document.createElement("button");
   botaoAlternativa.textContent = alternativa;
   caixaAlternativas.appendChild(botaoAlternativas);
  }

}