function ofrecerEnsenar() {
    var nombre = document.getElementById('nombre').value;
    if (nombre) {
        var publicaciones = document.getElementById('publicaciones');
        var publicacion = document.createElement('div');
        publicacion.className = 'publicacion';
        publicacion.innerHTML = `<p><strong>Ayudante:</strong> ${nombre}</p>`;
        publicaciones.appendChild(publicacion);
        document.getElementById('nombre').value = '';
    } else {
        alert('Debe ingresar su nombre y ubicación.');
    }
}

function solicitarAyuda() {
    var nombre = document.getElementById('solicitar-nombre').value;
    if (nombre) {
        var publicaciones = document.getElementById('publicaciones');
        var publicacion = document.createElement('div');
        publicacion.className = 'publicacion';
        publicacion.innerHTML = `<p><strong>Solicitante:</strong> ${nombre} <span class="esperando">[Esperando]</span></p>`;
        publicaciones.appendChild(publicacion);
        document.getElementById('solicitar-nombre').value = '';
    } else {
        alert('Debe ingresar su nombre.');
    }
}
