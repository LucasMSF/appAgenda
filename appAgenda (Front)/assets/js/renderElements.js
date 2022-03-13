function renderList() {
    $("#spinner").show();
    $.get(
      API_URL,
      function (data, textStatus, jqXHR) {
        $("#data").html('');
        data.forEach((contact) => {
          renderElement(contact);
        });
        //$('#dataTable').DataTable();
      },
      "JSON"
    ).always(function () {
      $("#spinner").hide();
    });
  }
  
  function renderElement(element) {
    let html = `
      <tr>
      <th>${element.id}</th>
      <td>${element.nome}</td>
      <td>${element.email}</td>
      <td>${element.telefone}</td>
      <td class="td-actions" style="font-size: 16px">
          <button title="Editar Contato" onclick="editContactModal(this, ${element.id})" class="btn btn-warning btn-action"><i class="bi bi-pencil icon-color"></i></button>
          <button title="Apagar Contato" onclick="deleteContactModal(this, ${element.id})" class="btn btn-danger btn-action"><i class="bi bi-trash3 icon-color"></i></button>
          <button title="Mostar Contato" onclick="openContactModal(this, ${element.id})" class="btn btn-success btn-action"><i class="bi bi-person-video2 icon-color"></i></button>
      </td>
      <tr/>`;
    $("#data").append(html);
  }