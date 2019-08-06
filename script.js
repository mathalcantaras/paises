let section = document.querySelector("section");
let paises = document.querySelectorAll("li");

function hongKong() {
    section.style.backgroundImage = "url('img/hk.jpg')";
}

function singapore() {
    section.style.backgroundImage = "url('img/sg.jpg')";
}

function newZealand() {
    section.style.backgroundImage = "url('img/nz.jpg')";
}

function switzerland() {
    section.style.backgroundImage = "url('img/sw.jpg')";
}

function australia() {
    section.style.backgroundImage = "url('img/as.jpg')";
}

paises[0].onclick = hongKong;
paises[1].onclick = singapore;
paises[2].onclick = newZealand;
paises[3].onclick = switzerland;
paises[4].onclick = australia;