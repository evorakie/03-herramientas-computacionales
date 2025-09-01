var valor = document.getElementById("pecinco").offsetWidth;

window.addEventListener("resize", function () {
    valor = document.getElementById("pecinco").offsetWidth;
});

function setup() {
    createCanvas(valor, valor, WEBGL).parent("#pecinco");
    select("#nombre").html("sayen (๑>؂•̀๑)");
    select("#aprendizaje").html("a manejar distintos programas!!!");
    noStroke();
}
function draw() {
    background(232, 165, 196);
    orbitControl();
    directionalLight(200, 200, 200, -1, -1, -1);
    pointLight(255, 255, 255, 200, -150, 200);
    specularMaterial(219, 50, 135);
    shininess(50);
    emissiveMaterial(50, 50, 100);
    fill(199, 21, 133);
    metalness(1);
    sphere(40, 64, 64);
}

function windowResized() {
    resizeCanvas(valor, valor);
}










