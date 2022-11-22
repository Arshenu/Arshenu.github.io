<?php 

$destinatario = 'vosslerhk@gmail.com'; // correo donde se enviara el mensaje //

$nombre = $_POST['nombre'];
$apellido = $_POST['apellido'];
$email = $_POST['email'];
$mensaje = $_POST['mensaje'];

$header = "Enviado desde Seguros Vitae";
$mensajeCompleto = $mensaje . "\nAtentamente: " . $nombre;

mail($destinatario, $asunto, $mensajeCompleto, $header);
echo "<script>alert('Correo Enviado')</script>";
echo "<script>setTimeout(\"location.href='index.html'\",1000)</script>";

?>