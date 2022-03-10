const element = document.querySelectorAll(".element");
const button = document.querySelector(".change-picture");
let count = 0;
button.addEventListener("click", () => {
    count++
    element.forEach(item => {

        item.style.animationPlayState = "running"
        if (count > 1) {
            item.classList.toggle("active")
            item.classList.toggle("active2")
            count = 2
        }
    })
})