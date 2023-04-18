/* Las "llaves" de encriptación que utilizaremos son las siguientes:

La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"

Requisitos:

Debe funcionar solo con letras minúsculas

No deben ser utilizados letras con acentos ni caracteres especiales

Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

Por ejemplo:
"gato" => "gaitober"
gaitober" => "gato"

La página debe tener campos para inserción del texto que será encriptado o desencriptado, y el usuario debe poder escoger entre as dos opciones.

El resultado debe ser mostrado en la pantalla.

Extras:

Un botón que copie el texto encriptado/desencriptado para la sección de transferencia, o sea que tenga la misma funcionalidad del ctrl+C o de la opción "copiar" del menú de las aplicaciones. */

//Objeto con las llaves para encriptar el mensaje
let llaves = {
    "e": "enter",
    "i": "imes",
    "a": "ai",
    "o": "ober",
    "u": "ufat" 
  };
  
  //funcion para encriptar
  const encriptar = ()  => {
    let texto = document.getElementById("textoOriginal").value.toLocaleLowerCase();
    let textoEncriptado = texto.replace(/[aeiou]/gm, function(llave) {
      return llaves[llave];
    });
    let textoDesencriptado = document.getElementById("textoEncriptado");
    textoDesencriptado.value = textoEncriptado;
    return textoEncriptado;
  }
  
  
  //Obtenemos el boton del html para enlazar la función de encriptar
  let botonEncrip = document.getElementById("encriptar");
  botonEncrip.addEventListener("click", function(event) {
    encriptar();
  })
  
  //funcion para desencriptar mensaje.
  const desencriptar = () => {
    let texto = document.getElementById("textoEncriptadoOriginal").value.toLocaleLowerCase();
    let textoDesencriptado = texto
        .replace(/enter/gm,"e")
        .replace(/imes/gm,"i")
        .replace(/ai/gm,"a")
        .replace(/ober/gm,"o")
        .replace(/ufat/gm,"u");
    let textoEncriptado = document.getElementById("textoDesencriptado");
    textoEncriptado.value = textoDesencriptado;
    return textoDesencriptado;
  }

  //Obtenemos el boton del html para enlazar la función de desencriptar
  let botonDesencrip = document.getElementById("desencriptar");
  botonDesencrip.addEventListener("click", function(event) {
    desencriptar();
  })