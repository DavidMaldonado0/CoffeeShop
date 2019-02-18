var txtNombreD, txtApellidoD, txtFechaReservarD, txtTelefonoD, txtNumPersonasD, txtEmailD, txtAsuntoD, btnEnviarD;

window.onload = function(e)
{
  txtNombreD = document.getElementById("first_name");
  txtApellidoD = document.getElementById("last_name");
  txtFechaReservarD = document.getElementById("datepicker");
  txtTelefonoD = document.getElementById("phone");
  txtNumPersonasD = document.getElementById("guest");
  txtEmailD = document.getElementById("email");
  txtAsuntoD = document.getElementById("subject");
  btnEnviarD = document.getElementById("submit");

  btnEnviarD.addEventListener('click', function(e)
{
  e.preventDefault();
  e.stopPropagation();

  var txtNombreValue = txtNombreD.value;
  var txtApellidoValue = txtApellidoD.value;
  var txtfechareservarValue = txtFechaReservarD.value;
  var txtTelefonoValue = txtTelefonoD.value;
  var txtNumPresonasValue = txtNumPersonasD.value;
  var txtEmailValue = txtEmailD.value;
  var txtAsuntoValue = txtAsuntoD.value;

  var validado = true;

  if((/^\s*$/).test(txtNombreValue))
  {
    validado = false;
    alert("El nombre es requerido");
  }

  if((/^\s*$/).test(txtApellidoValue))
  {
    validado = false;
    alert("El Apellido es requerido");
  }

  if((/^\s*$/).test(txtfechareservarValue))
  {
    validado = false;
    alert("La fecha a reservar es requerida");
  }

  if((/^\s*$/).test(txtTelefonoValue))
  {
    validado = false;
    alert("El numero telefonico es requerido")
  }

  if((/^\s*$/).test(txtNumPresonasValue))
  {
    validado = false;
    alert("El numero de personas es requerido")
  }

  if((/^\s*$/).test(txtEmailValue))
  {
    validado = false;
    alert("El correo eletronico es requerido")
  }

  if((/^[A-Za-z\s]*$/).test(txtNombreValue))
  {

  }
  else
  {
    validado = false;
    alert("Nombre tiene valores incorrectos");
  }

  if((/^[A-Za-z\s]*$/).test(txtApellidoValue))
  {

  }
  else
  {
    validado = false;
    alert("Apellido tiene valores incorrectos");
  }

  if((/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/).test(txtfechareservarValue))
  {

  }
  else
  {
    validado = false;
    alert("La fecha a reservar tiene valores incorrectos");
  }

  if ((/^\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*$/).test(txtTelefonoValue))
  {

  }
  else
  {
    validado = false;
    alert("Numero telefonico tiene valores incorrectos");
  }

  if(txtNumPresonasValue > 0 && txtNumPresonasValue < 11)
  {

  }
  else
  {
    validado = false;
    alert("Solo se permite un numero de entre 1 y 10 personas");
  }

  if((/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(txtEmailValue))
  {

  }
  else
  {
    validado = false;
    alert("Correo tiene valores incorrectos");
  }

  if((/^[a-zA-Z0-9\s,.'-]{3,}$/).test(txtAsuntoValue))
  {

  }
  else
  {
    validado = false;
    alert("El asunto tiene valores incorrectos");
  }

  if(validado)
  {
    alert('Datos Ingresados Correctamente');
    document.forms[0].submit();
  }
  else
  {
    alert("Errores en el ingreso de datos");
  }
  return false;


}); //end addEventListener

}
