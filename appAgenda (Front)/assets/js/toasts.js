var toast = new bootstrap.Toast($("#toastElement"));

function generateToast(type, title, msg) {
  let bgClass = "";
  let icon = "";
  switch (type) {
    case 0:
      bgClass = "primary";
      icon = 'bi bi-check-circle-fill me-3 text-primary';
      break;

    case 1:
      bgClass = "warning";
      icon = 'bi bi-exclamation-circle-fill me-3 text-warning';
      break;

    case 2:
      bgClass = "danger";
      icon = 'bi bi-x-circle-fill me-3 text-danger';
      break;

    default:
      break;
  }
  $('#tTitle').html(title);
  $('#tBody').html(msg);
  $("#toastElement").removeClass().addClass('toast bg-' + bgClass);
  $('#tIcon').removeClass().addClass(icon);



    toast.show();
}
