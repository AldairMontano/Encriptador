/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
No deben ser utilizados letras con acentos ni caracteres especiales */

//Objeto con las llaves para encriptar el mensaje
let llaves = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat" 
  };

  //traemos los elementos del html que usaremos en el codigo.
  let textoEncriptado = document.getElementById("textoModificado");
  let selec = document.getElementById("seleccionar");
  let botonEncrip = document.getElementById("encriptar");
  let botonDesencrip = document.getElementById("desencriptar");
  let botonCopiar = document.getElementById("copiar");

  //función para eliminar caracteres especiales.
  function eliminarC_E(texto) {
    return texto
           .normalize('NFD')
           .replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1")
           .normalize();
  } 

  //funcion para encriptar
  const encriptar = ()  => {
    let texto = document.getElementById("textoOriginal").value.toLocaleLowerCase();
    texto = eliminarC_E(texto);
    if (texto.length == 0) {
      alert("No ingresaste ningun mensaje");
      return;
    }
    textoEncriptado.value = texto.replace(/[aeiou]/gm, function(llave) {
      return llaves[llave];
    });
  }
  
  //vinculamos la funcion de encriptar al boton correspondiente.
  botonEncrip.addEventListener("click", function(event) {
    encriptar();
  })

  //funcion para desencriptar mensaje.
  const desencriptar = () => {
    let texto = document.getElementById("textoOriginal").value.toLocaleLowerCase();
    
    if (texto.length == 0) {
      alert("No ingresaste ningun mensaje");
      return;
    }

    textoEncriptado.value = texto
        .replace(/enter/gm,"e")
        .replace(/imes/gm,"i")
        .replace(/ai/gm,"a")
        .replace(/ober/gm,"o")
        .replace(/ufat/gm,"u");
  }

  //vinculamos la funcion de desencriptar al boton correspondiente.
  botonDesencrip.addEventListener("click", function(event) {
    desencriptar();
  })

  //Función para copiar el mensaje modificado.
  const copiar = () => {
    if (textoEncriptado.value.length != 0) {
      navigator.clipboard.writeText(textoEncriptado.value);
      let copiar = document.getElementById("copiar");
      copiar.textContent = "Copiado";
    } else {
      alert("No hay texto que copiar");
    }
  }

  //vincular el boton de copiar con la función copiar.
  botonCopiar.addEventListener("click", function(event) {
    copiar();
  })

  //función para seleccionar la modalidad (encriptar/desencriptar) de la pagina.
  const modalidad = () => {
    if (selec.textContent == "Desencriptar") {
      selec.textContent = "Encriptar";
      botonDesencrip.style.display = "inline"
    } else {
      selec.textContent = "Desencriptar";
      botonEncrip.style.display = "inline";
    }
  }

  //función para ocultar el boton dependiendo de la modalidad de la pagina.
  const seleccionar = () => {
    if (selec.textContent == "Desencriptar") {
      botonDesencrip.style.display = "none";
    } else {
      botonEncrip.style.display = "none";
    }
  }

  //cargamos la función de seleccionar cuando se inicie la pagina.
  document.addEventListener("DOMContentLoaded", function () {
    seleccionar();
  })

  //vinculamos las funciones de seleccion y modalidad al boton correspondiente.
  selec.addEventListener("click", function (event) {
    modalidad();
    seleccionar();
  })