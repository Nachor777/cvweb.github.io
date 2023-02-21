<?php
if (isset($_POST['submit'])) {
    $nombre = $_POST['fname'];
    $apellido = $_POST['lname'];
    $email = $_POST['email'];
    $mensaje = $_POST['mensaje'];
    $contenido_mensaje = "Nombre: $nombre\nApellido: $apellido\nEmail: $email\nMensaje: $mensaje\n";

    
    $destinatario = "ifacundoruiz@gmail.com";
    $asunto = "Nuevo mensaje del formulario de contacto";
    $cabeceras = "From: $email";

    
    if (mail($destinatario, $asunto, $contenido_mensaje, $cabeceras)) {
        echo "Tu mensaje ha sido enviado.";
    } else {
        echo "Error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
}
?>