//inicializando os modais
var deleteModal = new bootstrap.Modal($("#deleteModal"));
var createModal = new bootstrap.Modal($("#createModal"));
var openModal = new bootstrap.Modal($("#openModal"));
var editModal = new bootstrap.Modal($("#editModal"));

//var editModal = new bootstrap.Modal($('#editModal'));
//var showModal = new bootstrap.Modal($('#showModal'));

//Criar
function createContact(element) {
  blockButtons(1, element);
  $('#invalid').html('')
  $('#Email').removeClass('is-invalid');
  $('#createError').html('');
  $(element).append('<span class="spinner-border spinner-border-sm ms-2"></span>')
  if(!validation()) {
    $(element).html('Criar')
    $('#createError').html('<div class="alert alert-warning text-center" role="alert">Preencha todos os campos!</div>')
    blockButtons(0, element);
    return false;
  }
  $.ajax({
    type: "POST",
    url: API_URL,
    data: {
      nome: $('#Nome').val(),
      email: $('#Email').val(),
      telefone: $('#Telefone').val(),
      cep: $('#Cep').val(),
    },
    dataType: "JSON",
    success: function (response) {
      createModal.hide();
      generateToast(0, 'Informação', 'Contato cadastrado com sucesso!');
      clear();
      renderList();
    }
  })
  .always(function() {
    $(element).html('Criar');
    blockButtons(0, element);
  })
  .fail(function(data) {
    if(data.status == 406) {
      $('#Email').addClass('is-invalid');
      $('#invalid').html('Contato com esse E-mail já cadastrado!')
    }
  });
}

//Deletar
function deleteContactModal(btn, id) {
  $(btn).html('<span class="spinner-border spinner-border-sm"></span>');
  $.get(
    API_URL + id,
    function (data, textStatus, jqXHR) {
      $('#deleteName').html(data.nome);
      $('#deleteModal').attr('data-id', id);
      deleteModal.show();
    },
    "JSON"
  ).always(function () {
    $(btn).html('<i class="bi bi-trash3 icon-color"></i>');
  });
}


function deleteContact(element) {
  let id = $('#deleteModal').attr('data-id');
  $(element).append('<span class="spinner-border spinner-border-sm ms-2"></span>')
  blockButtons(1, element);
  $.ajax({
    type: "Delete",
    url: API_URL + id,
    data: {
      _method: 'delete'
    },
    dataType: "JSON",
    success: function (response) {
      deleteModal.hide();
      generateToast(0, 'Informação', 'Contato apagado com sucesso!');
      renderList();
    }
  })
  .always(function() {
    $(element).html('Excluir')
    blockButtons(0, element);
  });
}

//Mostrar contato
function openContactModal(btn, id) {
  $(btn).html('<span class="spinner-border spinner-border-sm"></span>');
  $.get(
    API_URL + id,
    function (data, textStatus, jqXHR) {
      $('#oNome').val(data.nome);
      $('#oEmail').val(data.email);
      $('#oTelefone').val(data.telefone);
      $('#oCep').val(data.cep);
      $.get(`https://viacep.com.br/ws/${data.cep}/json/`, 
        function (data, textStatus, jqXHR) {
          $('#oLog').val(data.logradouro);
          $('#oCid').val(data.localidade);   
          $('#oUf').val(data.uf); 
          $('#oDdd').val(data.ddd); 
          openModal.show();       
        },
        "JSON"
      )
      .always(function () {
        $(btn).html('<i class="bi bi-person-video2 icon-color"></i>');
      });;
    },
    "JSON"
  )
}

//Editar contato
function editContactModal(btn, id) {
  $(btn).html('<span class="spinner-border spinner-border-sm icon-color"></span>');
  $.get(
    API_URL + id,
    function (data, textStatus, jqXHR) {
      $('#editModal').attr('data-id', data.id);
      $('#eNome').val(data.nome);
      $('#eEmail').val(data.email);
      $('#eTelefone').val(data.telefone);
      $('#eCep').val(data.cep);
      editModal.show();
    },
    "JSON"
  )
  .always(function () {
    $(btn).html('<i class="bi bi-pencil icon-color"></i>');
  });
}

function editContact(element) {
  blockButtons(1, element);
  let id = $('#editModal').attr('data-id');
  $(element).append('<span class="spinner-border spinner-border-sm ms-2"></span>')
  if(!validation('e')) {
    $(element).html('Editar')
    $('#editError').html('<div class="alert alert-warning text-center" role="alert">Preencha todos os campos!</div>')
    blockButtons(0, element);
    return false;  
  }
  $.ajax({
    type: "PUT",
    url: API_URL + id,
    data: {
      _method: 'put',
      nome: $('#eNome').val(),
      email: $('#eEmail').val(),
      telefone: $('#eTelefone').val(),
      cep: $('#eCep').val(), 
    },
    dataType: "JSON",
    success: function (response) {
      editModal.hide();
      generateToast(0, 'Informação', response.message);
      renderList();
    }
  })
  .always(function() {
    $(element).html('Editar')
    blockButtons(0, element);
  });
}

function validation(prefix = '') {
  if($('#' + prefix + 'Nome').val() == '' || $('#' + prefix + 'Email').val() == '' || $('#' + prefix + 'Telefone').val() == '' || $('#' + prefix +'Cep').val() == '') return false
  return true;
}

function clear(prefix = '') {
  $('#' + prefix + 'Nome').val('');
  $('#' + prefix + 'Email').val('');
  $('#' + prefix + 'Telefone').val('');
  $('#' + prefix + 'Cep').val('');
}

function blockButtons(stats, element) {
  if(stats == 1) {
    $(element).attr('disabled', true);
  } else {
    $(element).removeAttr('disabled');  
  }
}
  
