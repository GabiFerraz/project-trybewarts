const botaoLogin = document.querySelector('.btn-enviar');
const inputEmail = document.querySelector('.input-email');
const inputSenha = document.querySelector('.input-senha');
const sumirText = document.querySelector('#structorNew');
const buttonSubmit = document.querySelector('#submit-btn');
const form = document.querySelector('#evaluation-form');
const namee = document.querySelector('#input-name');
const lastName = document.querySelector('#input-lastname');
const emailInput = document.querySelector('#input-email');
const selectCasa = document.getElementById('house');
const obsInput = document.querySelector('#textarea');

botaoLogin.addEventListener('click', () => {
  if (inputEmail.value === 'tryber@teste.com' && inputSenha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

const inputAgree = document.querySelector('#agreement');

function checkedButton(event) {
  const buttonClick = event.target.checked;
  if (buttonClick) {
    buttonSubmit.disabled = false;
  } else {
    buttonSubmit.disabled = true;
  }
}

function checkedInput() {
  inputAgree.addEventListener('click', checkedButton);
}

window.onload = () => {
  checkedInput();
  sumirText.style.display = 'none';
};

// quando a janela carregar vai chamar a função do input e quando a gente clicar no input vai habilitar ou desabilitar o botão de enviar.

// requisito bônus 20:

function contagemCaracteres() {
  const valorTextArea = document.getElementById('textarea').value;
  const contador = 500 - valorTextArea.length;
  const caracteresValor = document.getElementById('counter');
  caracteresValor.textContent = contador;
}

const textarea = document.getElementById('textarea');
textarea.addEventListener('keyup', contagemCaracteres, false);

// requisito bônus 21:
function familyAvaliation(lista) {
  for (let index = 0; index < lista.length; index += 1) {
    if (lista[index].checked) {
      return `${lista[index].value}`;
    }
  }
}
// é uma função auxiliar da função inserirMateria
function auxMateria(textoMateria, index) {
  let novaMateria = '';
  if (textoMateria[textoMateria.length - 1] === textoMateria[index]) {
    novaMateria += `${textoMateria[index].value}.`;
  } else {
    novaMateria += `${textoMateria[index].value}, `;
  }
  return novaMateria;
}

// é uma função auxiliar da função sumirAparecer
function inserirMateria() {
  let novaMateria = '';
  const textoMateria = document.getElementsByClassName('subject');
  for (let index = 0; index < textoMateria.length; index += 1) {
    if (textoMateria[index].checked) {
      novaMateria += auxMateria(textoMateria, index);
    }
  }
  return novaMateria;
}

function sumirAparecer(event) {
  event.preventDefault();
  sumirText.style.display = 'block';
  const textoFamilia = document.getElementsByName('family');
  const returnFamily = familyAvaliation(textoFamilia);
  const textoAvaliacao = document.getElementsByName('rate');
  const returnAvaliation = familyAvaliation(textoAvaliacao);
  const texto = selectCasa.options[selectCasa.selectedIndex].text;
  const resultMateria = inserirMateria();
  form.innerHTML = '';
  form.innerText = `Nome: ${namee.value} ${lastName.value}
  Email: ${emailInput.value}
  Casa: ${texto}
  Família: ${returnFamily}
  Matérias: ${resultMateria}
  Avaliação: ${returnAvaliation}
  Observações: ${obsInput.value}`;
}

buttonSubmit.addEventListener('click', sumirAparecer);
