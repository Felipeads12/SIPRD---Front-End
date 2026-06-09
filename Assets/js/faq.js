// faq.js - acordeao das perguntas

var perguntas = document.querySelectorAll('.faq-pergunta');

for (var i = 0; i < perguntas.length; i++) {
  perguntas[i].addEventListener('click', function() {
    var resposta = this.nextElementSibling;

    // Fecha todas as outras
    for (var j = 0; j < perguntas.length; j++) {
      if (perguntas[j] !== this) {
        perguntas[j].classList.remove('aberto');
        perguntas[j].nextElementSibling.classList.remove('aberto');
      }
    }

    // Abre ou fecha a clicada
    this.classList.toggle('aberto');
    resposta.classList.toggle('aberto');
  });
}
