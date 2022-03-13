const API_URL = "http://localhost:46000/api/contacts/";

$(document).ready(function () {

  //Renderizando a lista ao carregar a página
  renderList();
});

//Adicionando as máscaras
$('#Telefone').mask('(00) 00000-0000');
$('#Cep').mask('00000-000');
$('#eTelefone').mask('(00) 00000-0000');
$('#eCep').mask('00000-000');

function openModal(modal) {
  modal.show();
}

