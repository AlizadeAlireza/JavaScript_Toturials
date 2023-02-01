// function saveLead() {
//     console.log("button cliked")
// }

let myLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const tabBtn = document.getElementById("save-btn")

// const set_time = localStorage.setItem("time", "www.time.ir")
// const get_time = localStorage.getItem("time")
// console.log(get_time)
// localStorage.clear()

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

// "" -> we put an event in it
inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    console.log(myLeads)
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    render(myLeads)
})

deleteBtn.addEventListener("dblclick", function () {
    console.log("delete all the things")
    // other way:
    // myLeads = []
    // localStorage.setItem("myLeads", JSON.stringify(myLeads))
    // renderLeads()
    localStorage.clear()
    myLeads = []
    render(myLeads)
})

// let listItems = ""
// for (let i = 0; i < myLeads.length; i++) {
//     listItems += "<li>" + myLeads[i] + "</li>"
//     // const li = document.createElement("li")
//     // li.textContent = myLeads[i]
//     // ulEl.append(li)
//     console.log(listItems)
// }

tabBtn.addEventListener("click", function () {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        console.log("hi")
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads))
        render(myLeads)
    })
})

// ulEl.innerHTML = listItems
function render(leads) {
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        // listItems += "<li><a target='_blank' href='" + myLeads[i] +"'>"+  myLeads[i]+"</a></li>"
        listItems += `
            <li>
                <a target='_blank' href='${leads[i]}'>
                ${leads[i]}
                </a>
            </li>
        `
        // console.log(listItems)
    }
    ulEl.innerHTML = listItems
}
