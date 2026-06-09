// ===========================
// ALERTA TERRA - main.js
// ===========================


// ---- MENU HAMBÚRGUER ----
var menuBtn = document.getElementById('menu-btn');
var menuLista = document.getElementById('menu-lista');

menuBtn.addEventListener('click', function() {
  if (menuLista.classList.contains('aberto')) {
    menuLista.classList.remove('aberto');
  } else {
    menuLista.classList.add('aberto');
  }
});


// ---- MODAL ----
var modalFundo = document.getElementById('modal-fundo');
var modalEmoji = document.getElementById('modal-emoji');
var modalTitulo = document.getElementById('modal-titulo');
var modalTexto = document.getElementById('modal-texto');
var modalLista = document.getElementById('modal-lista');

// Dados de cada desastre
var desastres = {
  deslizamento: {
    emoji: '⛰️',
    titulo: 'Deslizamento de Terra',
    texto: 'Ocorre quando solo e rocha descem rapidamente por uma encosta, geralmente após chuvas fortes. Pode destruir casas e estradas em segundos.',
    acoes: [
      'Saia imediatamente da área de risco',
      'Não volte para buscar objetos',
      'Ligue para a Defesa Civil: 199',
      'Vá para terreno plano e seguro'
    ]
  },
  terremoto: {
    emoji: '🌍',
    titulo: 'Terremoto',
    texto: 'Tremor do solo causado pelo movimento das placas tectônicas. Pode durar segundos ou minutos e causar grandes danos estruturais.',
    acoes: [
      'Se proteja embaixo de uma mesa resistente',
      'Fique longe de janelas e paredes',
      'Não use elevadores após o tremor',
      'Ligue para Bombeiros: 193'
    ]
  },
  erosao: {
    emoji: '🌿',
    titulo: 'Erosão do Solo',
    texto: 'Desgaste progressivo do solo pela ação da chuva ou vento. Pode causar deslizamentos, assoreamento de rios e perda de terras agricultáveis.',
    acoes: [
      'Evite construir em áreas com solo exposto',
      'Plante vegetação para proteger o solo',
      'Denuncie ao IBAMA: 0800-61-8001',
      'Não descarte lixo em áreas verdes'
    ]
  },
  furacao: {
    emoji: '🌀',
    titulo: 'Furacão',
    texto: 'Tempestade tropical com ventos muito fortes e chuvas intensas. Formado sobre o oceano e capaz de causar inundações e destruição em cidades costeiras.',
    acoes: [
      'Recolha objetos soltos do lado de fora',
      'Reforce portas e janelas',
      'Prepare água e alimentos para 3 dias',
      'Siga as rotas de evacuação da Defesa Civil'
    ]
  },
  nevasca: {
    emoji: '🌨️',
    titulo: 'Nevasca',
    texto: 'Tempestade com neve intensa e ventos fortes que reduzem a visibilidade e podem isolar regiões inteiras por dias.',
    acoes: [
      'Fique em casa e se agasalhe bem',
      'Não dirija em estradas com gelo',
      'Tenha cobertores e alimentos em estoque',
      'Ligue para o SAMU em emergências: 192'
    ]
  },
  tornado: {
    emoji: '🌪️',
    titulo: 'Tornado',
    texto: 'Coluna de ar giratório com ventos destrutivos que toca o solo. Pode levantar carros, arrancar telhados e destruir construções em segundos.',
    acoes: [
      'Vá para o porão ou cômodo mais baixo da casa',
      'Proteja a cabeça com os braços',
      'Nunca fique embaixo de pontes',
      'Ligue 199 assim que o tornado passar'
    ]
  }
};

// Abrir modal ao clicar no botão do card
var botoes = document.querySelectorAll('.btn-modal');

for (var i = 0; i < botoes.length; i++) {
  botoes[i].addEventListener('click', function() {
    var chave = this.getAttribute('data-desastre');
    var dados = desastres[chave];

    modalEmoji.textContent = dados.emoji;
    modalTitulo.textContent = dados.titulo;
    modalTexto.textContent = dados.texto;

    modalLista.innerHTML = '';
    for (var j = 0; j < dados.acoes.length; j++) {
      var item = document.createElement('li');
      item.textContent = dados.acoes[j];
      modalLista.appendChild(item);
    }

    modalFundo.classList.add('aberto');
  });
}

// Fechar modal
document.getElementById('modal-fechar').addEventListener('click', function() {
  modalFundo.classList.remove('aberto');
});

// Fechar clicando fora
modalFundo.addEventListener('click', function(e) {
  if (e.target === modalFundo) {
    modalFundo.classList.remove('aberto');
  }
});


// ---- VALIDAÇÃO DO FORMULÁRIO ----
var form = document.getElementById('form-newsletter');
var inputEmail = document.getElementById('input-email');
var msgErro = document.getElementById('msg-erro');
var msgSucesso = document.getElementById('msg-sucesso');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  var email = inputEmail.value;

  if (email === '') {
    msgErro.textContent = 'Por favor, preencha o e-mail.';
    msgErro.style.display = 'block';
    msgSucesso.style.display = 'none';
    return;
  }

  if (email.indexOf('@') === -1 || email.indexOf('.') === -1) {
    msgErro.textContent = 'E-mail inválido. Verifique e tente novamente.';
    msgErro.style.display = 'block';
    msgSucesso.style.display = 'none';
    return;
  }

  msgErro.style.display = 'none';
  msgSucesso.textContent = 'Cadastrado! Você receberá alertas em: ' + email;
  msgSucesso.style.display = 'block';
  inputEmail.value = '';
});

// Limpa erro ao digitar
inputEmail.addEventListener('input', function() {
  msgErro.style.display = 'none';
});