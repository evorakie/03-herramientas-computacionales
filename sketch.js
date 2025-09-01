var valor = document.getElementById("pecinco").offsetWidth;

window.addEventListener("resize", function () {
    valor = document.getElementById("pecinco").offsetWidth;
});

function setup() {
    createCanvas(valor, valor, WEBGL).parent("#pecinco");
    select("#nombre").html("sayen (๑>؂•̀๑)");
    select("#aprendizaje").html("espero aprender a manejar distintos programas!!!");
    noStroke();
}
function draw() {
    background(#e8a5c4);
    orbitControl();
    directionalLight(200, 200, 200, -1, -1, -1);
    pointLight(255, 255, 255, 200, -150, 200);
    specularMaterial(200, 200, 255);
    shininess(50);
    emissiveMaterial(50, 50, 100);
    metalness(1);
    fill(MediumVioletRed);
    sphere(40, 64, 64);
}

function windowResized() {
    resizeCanvas(valor, valor);
}


