function mostrarMensagem() {
    alert("Deseja recarregar a página?");
    location.reload();
}

function redirecionarlin() {
    window.location.href = "https://www.linkedin.com/in/victor-soffi-11aaa2211/";
}

function redirecionargit() {
    window.location.href = "https://github.com/Kuroshi7?tab=repositories";
}

function carregarPagina() {
    document.querySelector('.container').classList.add('carregado');
}

function gerarNumeroSorte() {
    var numeroSorte = Math.floor(Math.random() * 100) + 1;
    document.getElementById('numeroSorte').innerText = "Número da sorte: " + numeroSorte;
}

function toggleInfo() {
    var infoDiv = document.getElementById('info');
    infoDiv.style.display = infoDiv.style.display === 'none' ? 'block' : 'none';
}

function fadeInProjects() {
    var projects = document.querySelectorAll('.project');
    var windowHeight = window.innerHeight;

    projects.forEach(function(project) {
        var positionFromTop = project.getBoundingClientRect().top;

        if (positionFromTop - windowHeight <= 0) {
            project.classList.add('visible');
        } else {
            project.classList.remove('visible');
        }
    });
}

window.addEventListener('load', function() {
    carregarPagina();
    fadeInProjects();
});

window.addEventListener('scroll', fadeInProjects);
