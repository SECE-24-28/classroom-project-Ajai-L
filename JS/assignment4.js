const buttons = document.querySelectorAll("button")
const paragraph = document.querySelector("p")
const box = document.getElementById("box")
const input = document.querySelector("input")
const container = document.querySelector(".container")

const list = document.createElement("ul")
container.appendChild(list)

buttons[0].addEventListener("click", () => {
    paragraph.innerText = "Text has been changed!"
})

buttons[1].addEventListener("click", () => {
    box.style.backgroundColor = "lightblue"
})

buttons[2].addEventListener("click", () => {
    box.style.display = "none"
})

buttons[3].addEventListener("click", () => {
    box.style.display = "flex"
})

buttons[4].addEventListener("click", () => {
    if (input.value.trim() !== "") {
        const newItem = document.createElement("li")
        newItem.innerText = input.value
        list.appendChild(newItem)
        input.value = ""
    }
})  