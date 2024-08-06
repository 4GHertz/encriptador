function encriptar(){
    let textoAEncriptar = document.getElementById("texto").value;
    textoAEncriptar = textoAEncriptar.toLowerCase();

    let regex = /^[a-zA-Z0-9\s]*$/;

    if (!regex.test(textoAEncriptar)){
        alert("No se permiten carácteres especiales");
        document.getElementById("texto").value = "";
        return;
    }

    document.getElementById("texto").value = "";

    document.getElementById("muñeco").style.display= "none";
    document.getElementById("mensajeInformativo").style.display="none";
    document.getElementById("textoIngresado").style.display="none";

    let nuevoTexto = textoAEncriptar.split('');

    for (let i = 0; i < textoAEncriptar.length; i++){
        
        if (nuevoTexto[i] == "e"){
            nuevoTexto[i] = "enter"
        }

        else if (nuevoTexto[i] == "i"){
                nuevoTexto[i] = "imes"
        }else if (nuevoTexto[i] == "a"){
                nuevoTexto[i] = "ai"
        }else  if (nuevoTexto[i] == "o"){
                nuevoTexto[i] = "ober"
        }else if (nuevoTexto[i] == "u"){
                 nuevoTexto[i] = "ufat"
        };
                    
    };

    nuevoTexto= nuevoTexto.join('');
    console.log(nuevoTexto);


    document.getElementById("resultado").innerText= nuevoTexto;

}

function desencriptar(){
    // alert("entramos a desencriptar");
    let textoADesencriptar = document.getElementById("texto").value;
    textoADesencriptar =  textoADesencriptar.toLowerCase();

    let regex = /^[a-zA-Z0-9\s]*$/;

    if (!regex.test(textoADesencriptar)){
        alert("No se permiten carácteres especiales para Desencriptar");
        document.getElementById("texto").value = "";
        return;
    }

    if (!textoADesencriptar.includes("enter") && !textoADesencriptar.includes("imes") && 
        !textoADesencriptar.includes("ai") && !textoADesencriptar.includes("ober") && 
        !textoADesencriptar.includes("ufat")) {
        alert("El texto no está encriptado");
        document.getElementById("texto").value = ""; 
        return;
    }

    document.getElementById("muñeco").style.display= "none";
    document.getElementById("mensajeInformativo").style.display="none";
    document.getElementById("textoIngresado").style.display="none";

    let nuevoTexto2 = textoADesencriptar;

    nuevoTexto2 = nuevoTexto2.replace(/enter/g, "e");
    nuevoTexto2 = nuevoTexto2.replace(/imes/g, "i");
    nuevoTexto2 = nuevoTexto2.replace(/ai/g, "a");
    nuevoTexto2 = nuevoTexto2.replace(/ober/g, "o");
    nuevoTexto2 = nuevoTexto2.replace(/ufat/g, "u");

    console.log("soy lo desencriptado " + nuevoTexto2);


    document.getElementById("resultado").innerText= nuevoTexto2;
    
}

function copiar(){
    let textarea = document.getElementById("resultado");
    textarea.select();
    textarea.setSelectionRange(0,99999);

    document.execCommand("copy");
}

// liz el codigo ya está todo listo, encripta y desencripta, opcional es si quiero hacer el boton de copiar.
// LO QUE SIGUE AHORA ES VOLVER A VER LOS ULTIMOS VIDEOS DE HTML PARA HACER EL RESPONSIVE Y PARA SUBIRLO A GITHUB LOS VIDEOS DE GIT. ÉXITOS GENIA!!!!

