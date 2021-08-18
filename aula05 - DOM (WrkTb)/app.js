/* var mudarCor = document.querySelector('input'); */

function mudarCor(cb) {

    elemento = document.getElementById("fundo");

elemento.style.backgroundColor = cb.checked ? "gray" : "black";
}

