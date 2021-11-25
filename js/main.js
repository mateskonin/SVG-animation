const element = document.querySelectorAll(".element");
const button = document.querySelector(".change-picture");
button.addEventListener("click", () => {
    element.forEach(item => {
        item.classList.toggle("active")
        item.classList.toggle("active2")
    })
})