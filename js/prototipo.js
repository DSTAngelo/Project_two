
function letrasValido(e) {
    key = e.keyCode || e.which;
    tecla = String.fromCharCode(key).toLowerCase();
    letras = " abcdefghijklmnñopqrstuvwxyz";
    especiales = [8, 37, 39, 46];

    tecla_especial = false
    for(var i in especiales) {
        if(key == especiales[i]) {
            tecla_especial = true;
            break;
        }
    }

    if(letras.indexOf(tecla) == -1 && !tecla_especial)
        return false;
}



function minuscula() {
    var x=document.getElementById("caracter").value;
    document.getElementById("caracter").value=x.toLowerCase();
 }


function limpiarCaja() {
    var content;
    var focusA;
    content = document.getElementById('caracter').value = "";
    focusA = document.getElementById('caracter').focus();
 }

function cargaDePalabras(x) {
    const listado = ['casa', 'perro', 'gato','elefante','gallina','vaca','loro','caballo','serpiente','conejo'];
    palabra_Buscar = listado[Math.floor(Math.random()*listado.length)];
    console.log(listado);
    console.log(palabra_Buscar);
    return x;
}

function cargaPlantas(x) {
    const listado = ['menta', 'helecho', 'pino','eucalipto','trebol','aguacate','pasto','cebollin','tomate','pepino'];
    palabra_Buscar = listado[Math.floor(Math.random()*listado.length)];
    console.log(listado);
    console.log(palabra_Buscar);
    return x;
}

function cargaCosas(x) {
    const listado = ['casa', 'perro', 'gato','elefante','gallina','vaca','loro','caballo','serpiente','conejo'];
    palabra_Buscar = listado[Math.floor(Math.random()*listado.length)];
    console.log(listado);
    console.log(palabra_Buscar);
    return x;
}

function cargaPelis(x) {
    const listado = ['casa', 'perro', 'gato','elefante','gallina','vaca','loro','caballo','serpiente','conejo'];
    palabra_Buscar = listado[Math.floor(Math.random()*listado.length)];
    console.log(listado);
    console.log(palabra_Buscar);
    return x;
}






function textoConvertir() {
    String.prototype.guion=function(index, character) {
        return this.substr(0, index) + character +
        this.substr(index+character.length); }
}

function evaluacion() {
    textoConvertir();
    limpiarCaja();
    let oculto = palabra_Buscar.replace(/./g, "_ ");
    let contadorErrores = 0;
    document.querySelector('#evaluar').addEventListener('click', () =>
        {
            const evaluar = document.querySelector('#caracter').value;
            let aprobado = true;

            for(const i in palabra_Buscar){
                if (evaluar == palabra_Buscar[i]){
                    oculto = oculto.guion(i*2, evaluar);
                    aprobado = false;
                    limpiarCaja();
                }
                document.querySelector('#salidaLetra').innerHTML = oculto;
            }
                if(aprobado){

                        contadorErrores++;
                        document.querySelector('#imagenAhorcado').style.backgroundPosition = -(300*contadorErrores) + 'px 0';
                        console.log(contadorErrores);
                        limpiarCaja();
                    }
        });
    }


function mostrar() {
    cargaDePalabras();
    evaluacion();
    limpiarCaja();
    
}

window.onload = mostrar;


