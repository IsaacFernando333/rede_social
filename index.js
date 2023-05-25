function abrir_pop() {
    let fundo = document.getElementById("esconder");
    if (fundo.style.display = "none") {
        fundo.style.display = 'flex';
    }
}

function fechar_pop() {
    let fundo = document.getElementById("esconder");
    if (fundo.style.display = "flex") {
        fundo.style.display = 'none';
    }
}

function pesquisa_pop() {
    let input = document.getElementById("pesquisa");
    if (input.style.display = "none") {
        input.style.display = 'flex';
    }
}

// function pesquisa_dispop() {
//     let input = document.getElementById("pesquisa");
//     if (input.style.display = "flex") {
//         input.style.display = 'none';
//     }
// }