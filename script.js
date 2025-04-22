const btnContato = document.getElementById('btn-contato');
const btnServicos = document.getElementById('btn-servicos');
const btnCadastro = document.getElementById('btn-cadastro');

btnContato.addEventListener('click', () => {
    window.location.href = 'contato.html';
});

btnServicos.addEventListener('click', () => {
    window.location.href = 'servico.html';
});

btnCadastro.addEventListener('click', () => {
    window.location.href = 'form.html';
});