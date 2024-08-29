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
         texto: "Nos ajuda a colar em provas e atividades",
         afirmação: "afirmação"
      }
     
 ]
},
{

   enunciado: "Quando a IA surgiu?",
   alternativas: [
      {
         texto: "Tudo começou em 1956",
         afirmação: "afirmação"
      },
      {
         texto: "Começou a partir dos anos 2000",
         afirmação: "afirmação"
      }
      
 ]
},
{

   enunciado: "Como a IA aprende?",
   alternativas: [
      {
         texto: "Aprende de forma totalmente autônoma, memoriza falas dos humanos e não precisa de algoritmos para processar os dados",
         afirmação: "afirmação"
      },
      {
         texto: "A IA aprende através de algoritmos e modelos que processam grandes volumes de dados.",
         afirmação: "afirmação"
      }
 ]
},
{

   enunciado: "Quais são as aplicações práticas da IA?",
   alternativas: [
      {
         texto: "É utilizada somente em celulares e computadores",
         afirmação: "afirmação"
      },
      {
         texto: "A Inteligência Artificial tem inúmeras aplicações em setores como saúde, finanças, educação, transporte e muito mais.",
         afirmação: "afirmação"
      }
 ]
 },
];
   
let atual = 0;
let perguntaAtual;
let historiaFinal = " ";

function mostraPergunta() {
   if (atual >= perguntas.length){

      return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = " ";
   mostraAlternativa();
}

function mostraAlternativa(){
  for(const alternativa of perguntaAtual.alternativas){
   const botaoAlternativa = document.createElement("button");
   botaoAlternativa.textContent = alternativa;
   botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
   caixaAlternativas.appendChild(botaoAlternativas);
  }

}