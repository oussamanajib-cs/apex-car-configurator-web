// script.js

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', function() {
    
    // Éléments du DOM
    const header = document.getElementById('mainHeader');
    const menuIcon = document.getElementById('menuIcon');
    const sideMenu = document.getElementById('sideMenu');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeMenuBtn');
    const body = document.body;
    
    // Seuil de scroll pour activer l'effet
    const SCROLL_THRESHOLD = 20;

    // === FONCTION POUR L'EFFET DE SCROLL ===
    function updateHeaderOnScroll() {
        if (window.scrollY > SCROLL_THRESHOLD) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // === FONCTIONS DU MENU ===
    function openMenu() {
        sideMenu.classList.add('open');
        overlay.classList.add('show');
        body.classList.add('menu-open');
    }

    function closeMenu() {
        sideMenu.classList.remove('open');
        overlay.classList.remove('show');
        body.classList.remove('menu-open');
    }

    // Scroll event pour activer l'effet
    let isScrolling = false;
    window.addEventListener('scroll', () => {
        if (!isScrolling) {
            window.requestAnimationFrame(() => { //Exécute cette fonction avant le prochain rafraîchissement de l’écran(actualisation de la page)
                updateHeaderOnScroll();
                isScrolling = false;
            });
            isScrolling = true;
        }
    });

    // Initial call au cas où la page est déjà scrollée
    updateHeaderOnScroll();

    // Ouverture du menu
    menuIcon.addEventListener('click', openMenu);

    // Fermeture du menu
    closeBtn.addEventListener('click', closeMenu);
    overlay.addEventListener('click', closeMenu);

    // Fermer le menu si on clique sur un lien
    const sideLinks = document.querySelectorAll('.side-menu a');
    sideLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            closeMenu();            
        });
    });
});

//DARK MODE
const darkModeIcon = document.getElementById("darkmodeIcone");

darkModeIcon.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode"); //toggle : ajoute ou supprime la classe
    darkModeIcon.style.color = document.body.classList.contains("dark-mode") ? "white" : "black";

    if (document.body.classList.contains("dark-mode")){ 
        darkModeIcon.innerText = "light_mode";
    } else {
        darkModeIcon.innerText = "dark_mode";
    }
})