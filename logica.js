
const textArea = document.querySelector(".textAreaInput");
const mensaje = document.querySelector(".resultado__textarea")


// FUNCION DE LOS 3 BOTONES, PARA ENCRIPTAR, DESENCRIPTAR, Y COPIAR: 

function btnEncriptar () {
    if (textArea.value === ""){
        alert("Debes ingresar un texto para encriptar")
    }   else {
const textoEncriptado = encriptar(textArea.value);
mensaje.value = textoEncriptado;
textArea.value="";
document.querySelector(".resultado__img").style.display="none";
document.querySelector(".resultado__p-acentuado").style.display="none";
document.querySelector(".resultado__button-copiar").style.display="block";
}};


function btnDesencriptar () {
    if (textArea.value === ""){
        alert("Debes ingresar un texto para desencriptar")
    }   else {const textoDesencriptado = desencriptar(textArea.value);
    mensaje.value = textoDesencriptado;
    textArea.value="";
    document.querySelector(".resultado__img").style.display="none";
    document.querySelector(".resultado__p-acentuado").style.display="none";
    document.querySelector(".resultado__button-copiar").style.display="block";
    }};


    //Funcion para encriptar 

function encriptar ( texto){
        let matrizCodigo = [ ["e","enter"],   ["o","ober"],  ["i","imes"], ["a","ai"] , ["u","ufat"]];
        texto = texto.toLowerCase();

        for ( let i = 0; i < matrizCodigo.length; i++ ){
            if(texto.includes(matrizCodigo[i][0])){
                texto= texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
            }
        }

        return texto;
}
 
   // Funcion desencriptar

function desencriptar ( textoEncriptado){
    let matrizCodigo = [ ["e","enter"],   ["o","ober"],  ["i","imes"], ["a","ai"] , ["u","ufat"]];
    textoEncriptado = textoEncriptado.toLowerCase();



    for ( let i = 0; i < matrizCodigo.length; i++ ){
        if( textoEncriptado.includes(matrizCodigo[i][1])){
            textoEncriptado= textoEncriptado.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }

    return textoEncriptado;
}

//funcion Copiar
function copiar(){
 let mensajeCopiado = document.querySelector(".resultado__textarea");
 mensajeCopiado.select(),
 document.execCommand("copy");
 console.log(mensajeCopiado)
}

