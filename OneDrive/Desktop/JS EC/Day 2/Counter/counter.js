let count = 0
let value = document.getElementById("value")
let btnIncrease = document.querySelector("#increase")
let btnDecrease = document.querySelector("#decrease")
let btnReset = document.querySelector("#reset")

// # chai id ko lagi ho ani . chai class ko lagi ho

btnIncrease.addEventListener("click", () => {
    count++
    updateValue()
})

btnDecrease.addEventListener("click", () => {
    count--
    updateValue()
})

btnReset.addEventListener("click", () => {
    count = 0
    updateValue()

})

function updateValue() {
    value.innerText = count
    if(count > 0) {
        value.style.color = "Blue"
    }
    else if(count < 0) {
        value.style.color = "red"
    }
    else {
        value.style.color = "green"
    }

}