
function cargaDePalabras(x) {

    const listado = ['casa', 'perro', 'gato','elefante','gallina','vaca','loro'];
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
                }
                document.querySelector('#salidaLetra').innerHTML = oculto;
            }
                if(aprobado){
                        
                        contadorErrores++;
                        document.querySelector('#imagenAhorcado').style.backgroundPosition = -(300*contadorErrores) + 'px 0';
                        console.log(contadorErrores);
                    }

        });
    
    }





function mostrar() {
    cargaDePalabras();
    evaluacion();
    
}

window.onload = mostrar;


