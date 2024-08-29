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
         afirmacao: "Isso é assustador!"
      },
      {
         texto: "Para as máquinas se desenvolverem e realizarem atividades humanas de forma autônoma",
         afirmação: "Isso é ótimo!"
      }
  ]
},
{

   enunciado: "No que a Inteligência Artificial nos ajuda?",
   alternativas: [
      {
         texto: "Nos ajuda a realizar tarefas autônomas, como dirigir carros, fazer pesquisas avançadas, diagnosticar doenças, identificar criminosos, entre outras funcionalidades",
         afirmacao: "Isso é ótimo!"
      },
      {
         texto: "Nos ajuda a colar em provas e atividades",
         afirmacao: "Isso é péssimo!"
      }
     
 ]
},
{

   enunciado: "Quando a IA surgiu?",
   alternativas: [
      {
         texto: "Tudo começou em 1956",
         afirmacao: "Uau!"
      },
      {
         texto: "Começou a partir dos anos 2000",
         afirmacao: "Impressionante"
      }
      
 ]
},
{

   enunciado: "Como a IA aprende?",
   alternativas: [
      {
         texto: "Aprende de forma totalmente autônoma, memoriza falas dos humanos e não precisa de algoritmos para processar os dados",
         afirmacao: "Isso é surpreendente!"
      },
      {
         texto: "A IA aprende através de algoritmos e modelos que processam grandes volumes de dados.",
         afirmação: "Isso é incrível!"
      }
 ]
},
{

   enunciado: "Quais são as aplicações práticas da IA?",
   alternativas: [
      {
         texto: "É utilizada somente em celulares e computadores",
         afirmacao: "Isso é ruim!"
      },
      {
         texto: "A Inteligência Artificial tem inúmeras aplicações em setores como saúde, finanças, educação, transporte e muito mais.",
         afirmação: "Isso é incrível!"
      }
 ]
 },
];
   
let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
   if (atual >= perguntas.length) {
      mostraResultado();
      return;
   }
   perguntaAtual = perguntas[atual];
   caixaPerguntas.textContent = perguntaAtual.enunciado;
   caixaAlternativas.textContent = "";
   mostraAlternativas();
}

function mostraAlternativas(){
  for(const alternativa of perguntaAtual.alternativas) {
   const botaoAlternativas = document.createElement("button");
   botaoAlternativa.textContent = alternativa.texto;
   botaoAlternativa.addEventListener("click", () => respostaSelecionada(alternativa));
   caixaAlternativas.appendChild(botaoAlternativas);
  }

}

function respostaSelecionada(opcaoSelecionada) {
   const afirmacoes = opcaoSelecionada.afirmacao;
   historiaFinal += afirmacoes + " ";
   atual++;
   mostraPergunta();
}

function mostraResultado() {
   caixaPerguntas.textContent = "Obrigada por participar!";
   textoResultado.textContent = historiaFinal;
   caixaAlternativas.textContent = "";
}

mostraPergunta();