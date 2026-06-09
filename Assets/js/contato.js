// contato.js - validação do formulário de contato

var form      = document.getElementById('form-contato');
var sucesso   = document.getElementById('contato-sucesso');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  var nome     = document.getElementById('nome');
  var email    = document.getElementById('email');
  var assunto  = document.getElementById('assunto');
  var mensagem = document.getElementById('mensagem');

  var valido = true;

  if (nome.value.trim() === '') {
    mostrarErro('erro-nome', 'Por favor, informe seu nome.', nome);
    valido = false;
  } else {
    limparErro('erro-nome', nome);
  }

  if (email.value.trim() === '') {
    mostrarErro('erro-email', 'Por favor, informe seu e-mail.', email);
    valido = false;
  } else if (email.value.indexOf('@') === -1 || email.value.indexOf('.') === -1) {
    mostrarErro('erro-email', 'E-mail inválido.', email);
    valido = false;
  } else {
    limparErro('erro-email', email);
  }

  if (assunto.value.trim() === '') {
    mostrarErro('erro-assunto', 'Por favor, informe o assunto.', assunto);
    valido = false;
  } else {
    limparErro('erro-assunto', assunto);
  }

  if (mensagem.value.trim() === '') {
    mostrarErro('erro-mensagem', 'Por favor, escreva sua mensagem.', mensagem);
    valido = false;
  } else {
    limparErro('erro-mensagem', mensagem);
  }

  if (valido) {
    sucesso.textContent = '✓ Mensagem enviada com sucesso! Entraremos em contato em breve.';
    sucesso.classList.add('visivel');
    form.reset();
  }
});

function mostrarErro(idErro, mensagemErro, campo) {
  var span = document.getElementById(idErro);
  span.textContent = mensagemErro;
  span.classList.add('visivel');
  campo.classList.add('invalido');
}

function limparErro(idErro, campo) {
  var span = document.getElementById(idErro);
  span.classList.remove('visivel');
  campo.classList.remove('invalido');
}