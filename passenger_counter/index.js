// camelCase
let countEl = document.getElementById("count-el")
let lastSave = document.getElementById("count-saved")
let saveEl = document.getElementById("save-el")
let errorParagraph = document.getElementById("error")

console.log(countEl)

let count = 0

function increment() {
    console.log("clicked for increment")
    count++
    countEl.textContent = "counter: " + count
    console.log(`the current count is: ${count}`)
    console.log("increment is applied")
}

function decrement() {
    console.log("clicked for decrement")
    count--
    countEl.textContent = "counter: " + count
    console.log(`the current count is: ${count}`)
    console.log("decrement is applied")
}

function reset() {
    console.log("clicked for restart")
    // count = 0
    countEl.textContent = 0
    saveEl.textContent = 0
    lastSave.textContent = 0
    console.log("restart is done!")
    console.log(`the current count is: ${0}`)
    if (countEl === 0 && lastSave === 0 && saveEl === 0) {
        reset()
        errorParagraph.textContent =
            "it can't be reset, every thins equal to zero"
    }
}

function save() {
    console.log("save button clicked!")
    lastSave.textContent = "last count: " + count
    let countStr = count + " - "
    saveEl.textContent += countStr
    console.log(`${count} been saved`)
    countEl.textContent = 0
    // it is after that saving for new counting 
    count = 0
}

function error() {
    console.log("purchase button clicked")
    errorParagraph.textContent = "something went wrong"
}
