// BOTÕES

const btnContato = document.getElementById('btncontato');
const btnServicos = document.getElementById('btnservicos');
const btnCadastro = document.getElementById('btncadastro');
const btnEdit = document.getElementById('btnedit');
const btnPessoa = document.getElementById('btnpessoa');
const btnOng = document.getElementById('btnong');

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

let cont = 1;

document.getElementById("radio-1").checked = true;

setInterval(() => {
  cont++;
  if (cont > 4) cont = 1;
  document.getElementById("radio-" + cont).checked = true;
}, 5000);