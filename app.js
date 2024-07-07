const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Configurar el directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Ruta para la página de inicio de sesión
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Ruta para la página de la aplicación
app.post('/app.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'app.html'));
});

// Ruta para la página de Equipo Superhéroe
app.get('/equipo-superheroe.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'equipo-superheroe.html'));
});

// Ruta para la página de Reservas
app.get('/reservas.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'reservas.html'));
});

app.get('/reporte-seguimiento.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'reporte-seguimiento.html'));
});

// Ruta para la página de Ayuda en Matemáticas
app.get('/ayuda-matematicas.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ayuda-matematicas.html'));
});

// Rutas para las páginas de los temas
app.get('/calculo-integral.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculo-integral.html'));
});

app.get('/calculo-diferencial.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculo-diferencial.html'));
});

app.get('/algebra.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'algebra.html'));
});

app.get('/matrices.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'matrices.html'));
});

app.get('/formulas.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'formulas.html'));
});

// Ruta para la página de Mapa de Reportes
app.get('/mapa-reportes.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mapa-reportes.html'));
});

// Ruta para la página de Ver Mapa en Tiempo Real
app.get('/ver-mapa.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'ver-mapa.html'));
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

app.get('/mapa-reportes.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mapa-reportes.html'));
});

app.get('/mapa-tiempo-real.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mapa-tiempo-real.html'));
});

// Ruta para la página de Mapa de Reportes
app.get('/mapa-reportes.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mapa-reportes.html'));
});

// Ruta para la página de Ver Mapa en Tiempo Real
app.get('/mapa-tiempo-real.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'mapa-tiempo-real.html'));
});

app.get('/calculadora.html', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'calculadora.html'));
});

