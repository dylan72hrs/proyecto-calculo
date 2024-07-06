document.addEventListener('DOMContentLoaded', function () {
    const salas = {
        aula: 410,
        lka: 5,
        biblioteca: 4,
        lc: 24
    };

    function createOptions(selector, count) {
        const container = document.querySelector(`#${selector} .opciones`);
        for (let i = 1; i <= count; i++) {
            const div = document.createElement('div');
            div.classList.add('sala');
            div.id = `${selector}-${i}`;
            div.innerHTML = `
                <p>${selector.toUpperCase()} ${i}</p>
                <p class="disponible">Disponible</p>
                <button onclick="showReservationForm('${selector}-${i}')">Reservar</button>
            `;
            container.appendChild(div);
        }
    }

    for (const [key, value] of Object.entries(salas)) {
        createOptions(key, value);
    }

    document.querySelectorAll('.desplegable > p').forEach(p => {
        p.addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('mostrar');
        });
    });
});

function showReservationForm(id) {
    document.getElementById('reservation-form').style.display = 'block';
    document.getElementById('reservation-form').dataset.salaId = id;
}

function makeReservation(event) {
    event.preventDefault();
    const salaId = document.getElementById('reservation-form').dataset.salaId;
    const nombre = document.getElementById('nombre').value;
    const fecha = document.getElementById('fecha').value;

    if (salaId && nombre && fecha) {
        const sala = document.getElementById(salaId);
        sala.querySelector('p.disponible').textContent = 'OCUPADO';
        sala.querySelector('p.disponible').classList.remove('disponible');
        sala.querySelector('p.ocupado').classList.add('ocupado');
    }

    document.getElementById('reservation-form').style.display = 'none';
    document.getElementById('reservation-form').reset();
}

function generateRandomOccupancy() {
    const lcOptions = document.querySelectorAll('#lc .sala');
    lcOptions.forEach(option => {
        const isOccupied = Math.random() > 0.5;
        if (isOccupied) {
            option.querySelector('p.disponible').textContent = 'OCUPADO';
            option.querySelector('p.disponible').classList.remove('disponible');
            option.querySelector('p.ocupado').classList.add('ocupado');

            const minutesLeft = Math.floor(Math.random() * 48);
            const timer = document.createElement('p');
            timer.classList.add('temporizador');
            timer.textContent = `${minutesLeft} min para liberar`;
            option.appendChild(timer);
        }
    });
}

generateRandomOccupancy();
