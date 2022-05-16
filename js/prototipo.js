
function cargaDePalabras(x) {

    const listado = ['casa', 'perro', 'gato','elefante','gallina','vaca','loro'];
    palabra_Buscar = listado[Math.floor(Math.random()*listado.length)];
    console.log(listado);
    console.log(palabra_Buscar);
    return x;
}

function remplazar(){
    
    String.prototype.guion=function(index, character) {
        return this.substr(0, index) + character +
        this.substr(index+character.length); }
    let palabraConGuiones = palabra_Buscar.replace(/./g, "_ ");
    document.querySelector('#evaluar').addEventListener('click', () =>
        {
            const evaluar = document.querySelector('#caracter').value;
            for(const i in palabra_Buscar){
                if (evaluar == palabra_Buscar[i]){
                    palabraConGuiones = palabraConGuiones.guion(i*2, evaluar);
                }
            }
            document.querySelector('#output').innerHTML = palabraConGuiones;
        });
}

function mostrar() {
    cargaDePalabras();
    remplazar();
}

window.onload = mostrar;


