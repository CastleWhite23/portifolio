let show = true;

const menu_section = document.querySelector(".menu-section")
const toggle = menu_section.querySelector(".menu-toggle")


toggle.addEventListener('click', abrir_menu)

function abrir_menu(){
    
    menu_section.classList.toggle("on", show)

    show = !show;
}

