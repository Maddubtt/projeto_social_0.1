// BOTÕES

const btnContato = document.getElementById('btn-contato');
const btnServicos = document.getElementById('btn-servicos');
const btnCadastro = document.getElementById('btn-cadastro');
const btnPessoa = document.getElementById('btn-pessoa');
const btnOng = document.getElementById('btn-ong');

btnContato.addEventListener('click', () => {
    window.location.href = 'contato.html';
});

btnServicos.addEventListener('click', () => {
    window.location.href = 'servico.html';
});

btnCadastro.addEventListener('click', () => {
    window.location.href = 'form.html';
});

btnPessoa.addEventListener('click', () => {
    window.location.href = 'form_v.html';
});

btnOng.addEventListener('click', () => {
    window.location.href = 'form_ong.html';
});

// CARROSSEL

const track = document.querySelector('.carousel-track');
let currentIndex = 0;
const totalImages = document.querySelectorAll('.carousel-track img').length;

setInterval(() => {
  currentIndex = (currentIndex + 1) % totalImages;
  track.style.transform = `translateX(-${currentIndex * 100}%)`;
}, 3000);