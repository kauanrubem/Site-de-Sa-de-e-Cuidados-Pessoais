function toggleMenu() {
    var menu = document.getElementById("menu");
    menu.classList.toggle("active");
}

function calcularIMC() {
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);

    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        document.getElementById('resultado').innerHTML = "Por favor, insira valores válidos.";
        return;
    }

    const imc = peso / (altura * altura);
    let categoria = '';

    if (imc < 18.5) {
        categoria = 'Baixo peso';
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = 'Peso normal';
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = 'Sobrepeso';
    } else {
        categoria = 'Obesidade';
    }

    document.getElementById('resultado').innerHTML = `Seu IMC é  + ${imc.toFixed(2)} - ${categoria}`;
}