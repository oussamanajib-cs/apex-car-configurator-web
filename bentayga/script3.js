// === Affichage du custom bar ===
const exterior = document.getElementById("exterior");
const interior = document.getElementById("interior");
const wheelsSection = document.getElementById("wheels");
const blackWheels = document.querySelector(".blackWheels");
const goldWheels = document.querySelector(".goldWheels");
const choiceWheels = document.querySelectorAll(".choiceWheels");


function displayExt(){
    exterior.style.display = "block";
    interior.style.display = "none";
    blackWheels.style.display = "none";
    goldWheels.style.display = "none";
    choiceWheels.forEach(wheel => {
        wheel.style.display = "none";
    });

    intImg.style.display = "none";
    carPrincipale.style.display = "block";

    imgs.forEach(img => {
        img.style.display = "block";
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayExt();
    updateCar();
    imgActive(imgs[2]);
});

function displayInt(){
    exterior.style.display = "none";
    interior.style.display = "block";
    blackWheels.style.display = "none";
    goldWheels.style.display = "none";
    choiceWheels.forEach(wheel => {
        wheel.style.display = "none";
    });
}
function displayWheels(){
    exterior.style.display = "none";
    interior.style.display = "none";
    blackWheels.style.display = "block";
    goldWheels.style.display = "block";
    choiceWheels.forEach(wheel => {
        wheel.style.display = "block";
    });

    intImg.style.display = "none";
    carPrincipale.style.display = "block";

    imgs.forEach(img => {
        img.style.display = "block";
    });
    updateCar();
}

// === Ligne sous les titres ===
const items = document.querySelectorAll(".titles h2");
const line = document.querySelector(".line");
let activeItem = items[0];

function moveLine(element){
  line.style.width = element.offsetWidth + "px"; /* offsetWidth renvoie la largeur de l'element */
  line.style.left = element.offsetLeft + "px"; /* offsetLeft renvoie la position de l'element par rapport au parent */
}

moveLine(activeItem);  
  
items.forEach(item => {
  item.addEventListener("mouseenter", () => moveLine(item));
  item.addEventListener("click", () => activeItem = item);
});

// === Sélection des petites images ===
const carPrincipale = document.getElementById("carPrincipale");
const imgs = document.querySelectorAll(".smallpics .img");

function imgActive(element){
    imgs.forEach(img => {
        img.style.borderLeft = "none";
        img.style.background = "transparent";
    });
    element.style.background = "#eef3f8";
    element.style.borderLeft = "4px solid #0A2540";

    // Mettre à jour l'image principale
    carPrincipale.src = element.querySelector("img").src;
}

imgs.forEach(img => {
    img.addEventListener("click", () => imgActive(img));
});

// === Changement des couleurs ===
let extColor = "blue";
let intColor = "aquaint";
let wheelColor = "black";

// Sélection couleurs extérieures
const extColors = document.querySelectorAll("[data-extcolor]");
extColors.forEach(color => {
    color.addEventListener("click", () => {
        extColor = color.dataset.extcolor;
        updateCar();
        updateTotal();
    });
});

// Sélection couleurs intérieures
const intColors = document.querySelectorAll("[data-intcolor]");
intColors.forEach(color => {
    color.addEventListener("click", () => {
        intColor = color.dataset.intcolor;
        updateInt();
        updateTotal();
    });
});

// Sélection roues
const wheelImgs = document.querySelectorAll("[data-wheelcolor]");
wheelImgs.forEach(wheel => {
    wheel.addEventListener("click", () => {
        wheelColor = wheel.dataset.wheelcolor;
        updateCar();
        updateTotal();
    });
});

function updateCar(){

    // Image principale
    carPrincipale.src = `../pics/cars/bentley mansory/${extColor}/${wheelColor}/1.png`;

    // Mettre à jour les petites images
    const smallImages = [
        "2.png",
        "3.png",
        "1.png"
    ];

    imgs.forEach((imgBox, index) => {
        imgBox.querySelector("img").src =`../pics/cars/bentley mansory/${extColor}/${wheelColor}/${smallImages[index]}`;
    });
}

document.addEventListener("DOMContentLoaded", () => {
    displayExt();
    updateCar();
    updateInt();
});

//===== partie interieur=====
const intImg = document.getElementById("intImg");
const intBtn = document.getElementById("intBtn");

intBtn.addEventListener("click", () => {
    displayInt();
    intImg.style.display = "block";
    carPrincipale.style.display = "none";
    imgs.forEach(img =>{
        img.style.display = "none";
    })
    
});

function updateInt(){
    intImg.src = `../pics/cars/bentley mansory/${intColor}.png`;
}


//-------DARK MODE-------
const darkModeBtn = document.getElementById("darkmodeIcone");

darkModeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    darkModeBtn.style.color = document.body.classList.contains("dark-mode") ? "white" : "black";

    if (document.body.classList.contains("dark-mode")){ 
        darkModeBtn.innerText = "light_mode";
    } else {
        darkModeBtn.innerText = "dark_mode";
    }
});

//=====TOTAL=====

let cartTotal = 0;
let currentConfigTotal = 0;

const prices = {
    exterior: {
        blue: 3500,
        green: 4000,
        gris: 2600
    },
    interior: {
        aquaint: 2400,
        orangeint: 3000,
        whiteint: 4000
    },
    wheels: {
        black: 3000,
        gold: 2800
    }
}

const cartDisplay = document.getElementById("cartDisplay");
const addBtn = document.querySelector(".addItem button");
const additionDisplay = document.querySelector(".addition span");
const totalDisplay = document.querySelector(".total span:last-child");


function updateTotal() {
    const extPrice = prices.exterior[extColor] ;
    const intPrice = prices.interior[intColor] ;
    const wheelPrice = prices.wheels[wheelColor] ;

    const optionsTotal = extPrice + intPrice + wheelPrice;
    currentConfigTotal = optionsTotal; 

    additionDisplay.textContent = `+$${optionsTotal.toLocaleString()}`;

    return currentConfigTotal;
}

addBtn.addEventListener("click", () => {
    updateTotal();
    cartTotal += currentConfigTotal;
    cartDisplay.textContent = `$${cartTotal.toLocaleString()}`;

    localStorage.setItem("Total", cartTotal);
    localStorage.setItem("carPic", carPrincipale.src);

    addBtn.innerText = "ADDED ✓";
    setTimeout(() => { addBtn.innerText = "ADD"; }, 1000);
});

let basePrice = 700000;
let carName = "Bentley Bentayga Mansory";

localStorage.setItem("basePrice", basePrice);
localStorage.setItem("carName", carName);