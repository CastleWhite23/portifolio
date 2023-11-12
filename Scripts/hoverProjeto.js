const btnVerMais = document.querySelector(".btn-more");
const cardDestaque = document.querySelectorAll(".item-card-destaque");
console.log(cardDestaque)



cardDestaque.forEach(item => {
    item.addEventListener("mouseenter", () => {
       item.children[1].classList.remove("none")
    })

    item.addEventListener("mouseleave", () => {
        item.children[1].classList.add("none")
    })
});






