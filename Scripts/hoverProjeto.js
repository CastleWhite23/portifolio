const btnVerMais = document.querySelector(".btn-more");
const cardDestaque = document.querySelectorAll(".item-card-destaque");




cardDestaque.forEach(item => {
    item.addEventListener("mouseenter", () => {
       item.children[1].classList.remove("none")
    })

    item.addEventListener("mouseleave", () => {
        item.children[1].classList.add("none")
    })
});






