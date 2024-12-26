function calcularIMC() {
    const peso = parseFloat(document.getElementById("peso").value);
    const altura = parseFloat(document.getElementById("altura").value);
    const resultado = document.getElementById("resultado");
    const imagen = document.getElementById("imagen");
  
    if (!peso || !altura || altura <= 0) {
      resultado.textContent = "Por favor, ingresa valores válidos.";
      imagen.style.display = "none";
      return;
    }
  
    const imc = (peso / (altura * altura)).toFixed(2);
    resultado.textContent = `Tu IMC es ${imc}.`;
  
    // switch (imc){
    //   case imc < 18.5:
    //     resultado.textContent += " Estás en la categoría de bajo peso.";
    //     imagen.src = "../images/bajo peso.jpg";
    //     break
    //   case imc >= 18.5 && imc < 24.9:
    //     resultado.textContent += " Estás en la categoría de peso normal.";
    //     imagen.src = "../images/peso normal.jpg";
    //     break
    //   case imc >= 25 && imc < 29.9:
    //     resultado.textContent += " Estás en la categoría de sobrepeso.";
    //     imagen.src = "../images/sobre peso.jpg"; 
    //     break
    //   default:
    //     resultado.textContent += " Estás en la categoría de sobrepeso.";
    //     imagen.src = "../images/obesidad.jpg"; 
    // }

    if (imc < 18.5) {
      resultado.textContent += " Estás en la categoría de bajo peso.";
      imagen.src = "../images/bajo peso.jpg"; 
    } else if (imc >= 18.5 && imc < 24.9) {
      resultado.textContent += " Estás en la categoría de peso normal.";
      imagen.src = "../images/peso normal.jpg"; 
    } else if (imc >= 25 && imc < 29.9) {
      resultado.textContent += " Estás en la categoría de sobrepeso.";
      imagen.src = "../images/sobre peso.jpg"; 
    } else {
      resultado.textContent += " Estás en la categoría de obesidad.";
      imagen.src = "../images/obesidad.jpg"; 
    }
  
    imagen.style.display = "block";
  }
  
  