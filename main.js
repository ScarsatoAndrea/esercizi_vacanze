let random = document.getElementById("btnRandom")
let cont = 1
let valore = document.getElementById("txt")
const lista = document.getElementById("list")

function ClearList(){
    let elementi = document.querySelectorAll("ul>li")
    console.log(elementi)
    for (let index = 0; index < elementi.length ; index++) {
        lista.removeChild(elementi[index]);
    }
    cont = 1;
}

console.log((Number)(valore.value))

random.onclick = function(){
    ClearList();
    for (let index = 0; index < (Number)(valore.value); index++) {
        let numero = document.createElement("li")
        let valoreRandom = Math.random()
        valoreRandom = (valoreRandom * 100) - 50;
        Math.round(valoreRandom)
        console.log(valoreRandom)
        numero.innerHTML = cont + " = " + Math.round(valoreRandom);
        lista.appendChild(numero)
        cont ++;
    }
    valore.value = ""
}
