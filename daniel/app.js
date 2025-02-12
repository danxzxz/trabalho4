function includeHTML(elementId, file) {
    fetch(file)
        .then(response => response.text())
        .then(data => document.getElementById(elementId).innerHTML = data)
        .catch(error => console.log("Erro ao carregar " + file + ": " + error));
}

document.addEventListener("DOMContentLoaded", function () {

    // Incluir o menu lateral e a navbar
    includeHTML("container-sidebar", "sidebar.html");
    includeHTML("container-navbar", "navbar.html");

    let botao = document.getElementById('botaoSalvar');
    botao.addEventListener('click', function () {
        const modal = new bootstrap.Modal(document.getElementById('detalhes'));
        modal.show(); // mostrar o modal
    });
});

function toggleMenu(element) {
    // Alternar a visibilidade do menu em telas pequenas
    document.getElementById("sidebar").classList.toggle("show");
}