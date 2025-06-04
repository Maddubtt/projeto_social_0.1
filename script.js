// BOTÕES

const btnContato = document.getElementById('btn-contato');
const btnServicos = document.getElementById('btn-servicos');
const btnCadastro = document.getElementById('btn-cadastro');
const btnEdit = document.getElementById('btn-edit');
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

btnEdit.addEventListener('click', () => {
    window.location.href = 'edit.html';
});

btnPessoa.addEventListener('click', () => {
    window.location.href = 'form_v.html';
});

btnOng.addEventListener('click', () => {
    window.location.href = 'form_ong.html';
});

// CARROSSEL

// let cont = 1;

// document.getElementById("radio-1").checked = true;

// setInterval(() => {
//   cont++;
//   if (cont > 4) cont = 1;
//   document.getElementById("radio-" + cont).checked = true;
// }, 5000);