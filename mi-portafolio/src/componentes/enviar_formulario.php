<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $nombre = $_POST["nombre"];
  $email = $_POST["email"];
  $mensaje = $_POST["mensaje"];

  $to = "p.rodriguez.ariel1@gmail.com"; 
  $subject = "Nuevo mensaje de contacto";
  $message = "Nombre: $nombre\nEmail: $email\nMensaje: $mensaje";

  if (mail($to, $subject, $message)) {
    echo "Mensaje enviado con éxito";
  } else {
    echo "Error al enviar el mensaje";
  }
}
?>
