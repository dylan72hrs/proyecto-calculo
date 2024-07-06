// mapa-reportes.js

document.getElementById('upload-btn').addEventListener('click', function() {
    const fileInput = document.getElementById('file-upload');
    const reportContainer = document.getElementById('report-container');
    
    if (fileInput.files.length > 0) {
        const file = fileInput.files[0];
        const reader = new FileReader();
        
        reader.onload = function(e) {
            const img = document.createElement('img');
            img.src = e.target.result;
            img.className = 'uploaded-image';
            img.onclick = function(event) {
                const comment = prompt('Ingrese su comentario:');
                if (comment) {
                    const commentBox = document.createElement('div');
                    commentBox.className = 'comment-box';
                    commentBox.style.left = event.offsetX + 'px';
                    commentBox.style.top = event.offsetY + 'px';
                    commentBox.innerText = comment;
                    img.parentElement.appendChild(commentBox);
                }
            };
            const imgContainer = document.createElement('div');
            imgContainer.className = 'img-container';
            imgContainer.appendChild(img);
            reportContainer.appendChild(imgContainer);
        };
        
        reader.readAsDataURL(file);
    }
});

document.getElementById('view-map-btn').addEventListener('click', function() {
    window.open('mapa-tiempo-real.html', '_blank');
});
