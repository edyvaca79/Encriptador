const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");

function btnEncriptar(){
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    mensaje.style.backgroundImage = "none"
    }

function encriptar(stringEncriptada){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i=0;i<matrizCodigo.length;i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada=stringEncriptada.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
    }
    return stringEncriptada
}

function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value="";
    }

function desencriptar(stringDesencriptada){
    let matrizCodigo =[["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i=0;i<matrizCodigo.length;i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1],matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
}
function copiarAlPortapapeles() {
    var textarea = document.querySelector(".mensaje");
    textarea.removeAttribute("disabled"); // Habilitar temporalmente el textarea
    textarea.select();
    textarea.setSelectionRange(0, 99999); // Para dispositivos móviles
  
    try {
      document.execCommand("copy");
      console.log("Texto copiado al portapapeles.");
    } catch (err) {
      console.error("Error al copiar el texto al portapapeles: ", err);
    }
  
    // Opcional: Cambiar el texto del botón para indicar que se copió
    var boton = document.querySelector(".btn-copiar");
    boton.innerText = "¡Copiado!";
  
    textarea.setAttribute("disabled", true); // Volver a deshabilitar el textarea
  }
  