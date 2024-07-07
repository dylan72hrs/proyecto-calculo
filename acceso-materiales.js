document.getElementById('toggle-publicacion').addEventListener('change', function() {
    var publicacionContainer = document.getElementById('publicacion-container');
    if (this.checked) {
        publicacionContainer.style.display = 'block';
    } else {
        publicacionContainer.style.display = 'none';
    }
});

function agregarPublicacion() {
    var detalle = document.getElementById('detalle').value;
    var fecha = document.getElementById('fecha').value;
    var hora = document.getElementById('hora').value;
    var titulo = document.getElementById('titulo').value;
    var fotoUpload = document.getElementById('foto-upload');

    if (!titulo || fotoUpload.files.length === 0) {
        alert('Debe agregar un título y una foto.');
        return;
    }

    var historial = document.getElementById('historial-publicaciones');
    var publicacion = document.createElement('div');
    publicacion.className = 'publicacion';

    var fotoURL = URL.createObjectURL(fotoUpload.files[0]);

    publicacion.innerHTML = `
        <p><strong>Detalle:</strong> ${detalle}</p>
        <p><strong>Fecha:</strong> ${fecha}</p>
        <p><strong>Hora:</strong> ${hora}</p>
        <p><strong>Título:</strong> ${titulo}</p>
        <img src="${fotoURL}" alt="Foto" width="100%">
    `;

    historial.appendChild(publicacion);

    document.getElementById('detalle').value = '';
    document.getElementById('fecha').value = '';
    document.getElementById('hora').value = '';
    document.getElementById('titulo').value = '';
    document.getElementById('foto-upload').value = '';
}
