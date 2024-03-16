function mostrarMensagem() {
    alert("Deseja recarregar a pagina?");
    location.reload ();
}

function redirecionarlin() {
    window.location.href = "https://www.linkedin.com/in/victor-soffi-11aaa2211/";
}

function redirecionargit() {
    window.location.href = "https://github.com/Kuroshi7?tab=repositories";
}

window.addEventListener('load', function() {
    document.querySelector('.container').classList.add('carregado');
});

function gerarNumeroSorte() {
    var numeroSorte = Math.floor(Math.random() * 100) + 1;
    document.getElementById('numeroSorte').innerText = "Número da sorte: " + numeroSorte;
}

function toggleInfo() {
    var infoDiv = document.getElementById('info');
    if (infoDiv.style.display === 'none') {
        infoDiv.style.display = 'block';
    } else {
        infoDiv.style.display ='none';
}
}