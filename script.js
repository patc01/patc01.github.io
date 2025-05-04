function verificarRespuesta() {
    const opciones = document.getElementsByName('pregunta');
    let seleccion = '';
    for (let i = 0; i < opciones.length; i++) {
        if (opciones[i].checked) {
            seleccion = opciones[i].value;
            break;
        }
    }

    const resultado = document.getElementById("resultado");
    if (seleccion === "b") {
        resultado.textContent = "¡Correcto! La diabetes es un factor de riesgo del paciente.";
        resultado.className = "result"; // Clase para resultado correcto
    } else {
        resultado.textContent = "Incorrecto. Revisa los factores de riesgo según su origen.";
        resultado.className = "result error"; // Clase para resultado incorrecto
    }
}

  