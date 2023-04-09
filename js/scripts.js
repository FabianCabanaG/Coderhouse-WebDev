const burgerMenu = document.getElementById("mobileMenu");
const burgerButton = document.getElementById("burgerButton");

function dropdownMenu() {
    if (burgerMenu.style.display === 'flex') {
        burgerMenu.style.display = 'none'
    } else {
        burgerMenu.style.display = 'flex'
    }
};


burgerButton.addEventListener("click",dropdownMenu,false);
