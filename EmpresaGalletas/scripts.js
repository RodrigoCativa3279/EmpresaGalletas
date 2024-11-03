function registrarEstado() {
    const sector = document.getElementById('sector').value;
    const estado = document.getElementById('estado').value;
    if (estado) {
        const message = `Estado registrado para ${sector}: ${estado}`;
        document.getElementById('tracking-status').innerText = message;
    } else {
        alert("Por favor, ingrese el estado del paquete.");
    }
}

function toggleCodigo() {
    const estadoPunto = document.getElementById('estado-punto').value;
    const codigoSection = document.getElementById('codigo-section');
    
    if (estadoPunto === "codigo") {
        codigoSection.style.display = "block";
    } else {
        codigoSection.style.display = "none";
    }
}

function establecerEstadoPunto() {
    const punto = document.getElementById('punto').value;
    const estadoPunto = document.getElementById('estado-punto').value;
    const codigo = document.getElementById('codigo').value;
    let message = `Punto de venta ${punto}: `;

    if (estadoPunto === "ubicacion") {
        message += "Ubicación actual registrada.";
    } else if (estadoPunto === "codigo") {
        if (codigo) {
            message += `Código de verificación establecido: ${codigo}`;
        } else {
            alert("Por favor, ingrese un código de verificación.");
            return;
        }
    }
    document.getElementById('location-status').innerText = message;
}
