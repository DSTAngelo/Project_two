String.prototype.guion=function(index, character) { //ya
     return this.substr(0, index) + character + 
     this.substr(index+character.length); } 

const palabras = ['casa', 'perro', 'gato','elefante']; //ya

const palabra = palabras[Math.floor(Math.random()*palabras.length)]; //ya
let palabraConGuiones = palabra.replace(/./g, "_ "); //ya


document.querySelector('#calcular').addEventListener('click', () =>
{
    const letra = document.querySelector('#letra').value;
    
    
    for(const i in palabra){
        if (letra == palabra[i]){
            palabraConGuiones = palabraConGuiones.guion(i*2, letra);
        }
    }
    
    document.querySelector('#output').innerHTML = palabraConGuiones;
});