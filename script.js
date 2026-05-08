// Variable para rastrear el estado del circuito (Inicia abierto/apagado)
let isClosed = false;

function toggleSwitch() {
    const svg = document.getElementById('circuit-svg');
    const statusText = document.getElementById('status');
    
    // Invertimos el estado
    isClosed = !isClosed;

    if (isClosed) {
        // ACTIVADO
        svg.classList.add('on');
        statusText.innerText = "Cerrado (ON) - Fluyendo corriente";
        statusText.style.color = "#2ecc71"; // Verde
        console.log("Circuito Cerrado: La corriente fluye.");
    } else {
        // DESACTIVADO
        svg.classList.remove('on');
        statusText.innerText = "Abierto (OFF)";
        statusText.style.color = "#c0392b"; // Rojo
        console.log("Circuito Abierto: El flujo se detiene.");
    }
}

// Fase 3: Interactividad del cargador
document.getElementById('cargador-info').addEventListener('click', function() {
    this.innerHTML = `
        <p style="color: #ffcc00; margin: 0;"><strong>Respuesta:</strong> El cargador reduce el <b>Voltaje</b> de 220V/110V a 5V para que tu batería no explote. Además, convierte Corriente Alterna (AC) en Corriente Continua (DC).</p>
    `;
    this.style.background = "rgba(255, 204, 0, 0.1)";
});

// Scroll suave para el menú
document.querySelectorAll('.sidebar a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});