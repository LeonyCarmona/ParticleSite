function showForm(tipo) {
    const formularioCliente = document.getElementById('formularioCliente');
    const formularioExperto = document.getElementById('formularioExperto');

    if (tipo === 'cliente') {
        formularioCliente.style.display = 'block';
        formularioExperto.style.display = 'none';
    } else if (tipo === 'experto') {
        formularioCliente.style.display = 'none';
        formularioExperto.style.display = 'block';
    }
}

// Aquí puedes agregar la lógica para el formulario de experto si es necesario
// Por ejemplo, validar el inicio de sesión, enviar datos al servidor, etc.
// Puedes basarte en la función enviarSolicitud para hacer estas operaciones.
