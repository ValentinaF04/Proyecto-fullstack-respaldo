function verificarCompatibilidad(evento) {
    evento.preventDefault();

    var cpu = document.getElementById('cpu').value;
    var placaMadre = document.getElementById('placaMadre').value;
    var ram = document.getElementById('ram').value;
    var gpu = document.getElementById('gpu').value;
    var divResultado = document.getElementById('divResultado');

    var mensajes = [];
    var esCompatible = true;

    if ((cpu.includes('lga1700') && !placaMadre.includes('lga1700')) || (cpu.includes('am5') && !placaMadre.includes('am5'))) {
        esCompatible = false;
        mensajes.push('<b>Error:</b> El procesador no es compatible con la placa madre.');
    }

    if ((ram === 'ddr5' && !placaMadre.includes('ddr5')) || (ram === 'ddr4' && !placaMadre.includes('ddr4'))) {
        esCompatible = false;
        mensajes.push('<b>Error:</b> La memoria RAM no es compatible con la placa madre.');
    }
    
    if (gpu === 'high-end') {
        mensajes.push('<b>Recomendación:</b> Para esa tarjeta gráfica, asegúrate de tener una fuente de poder de 850W o más.');
    }

    if (esCompatible) {
        divResultado.innerHTML = '<div class="alert alert-success">¡Felicidades! Tus componentes son compatibles.</div>' + mensajes.join('<br>');
    } else {
        divResultado.innerHTML = '<div class="alert alert-danger">¡Cuidado! Hay problemas de compatibilidad.</div>' + mensajes.join('<br>');
    }
}