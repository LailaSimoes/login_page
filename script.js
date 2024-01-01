function handleEnviarButtonClick() {

  window.location.href = 'https://suaconta.com/';
}

function handleGoogleButtonClick() {

  window.location.href = 'https://accounts.google.com/';
}

function handlecadastroButtonClick() {
  window.location.href = 'https://seucadastro.com/';
}

function handleinstagramButtonClick() {
  window.location.href = 'https://instagram.com/';
}

function handlefacebookButtonClick() {
  window.location.href = 'https://facebook.com/';
}

function handletwitterButtonClick() {
  window.location.href = 'https://twitter.com/';
}

document.getElementById('enviarButton').addEventListener('click', handleEnviarButtonClick);

document.getElementById('googleButton').addEventListener('click', handleGoogleButtonClick);

document.getElementById('cadastroButton').addEventListener('click', handlecadastroButtonClick);

document.getElementById('instagramButton').addEventListener('click', handleinstagramButtonClick);

document.getElementById('facebookButton').addEventListener('click', handlefacebookButtonClick);

document.getElementById('twitterButton').addEventListener('click', handletwitterButtonClick);