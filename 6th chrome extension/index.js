// function saveLead()
// {
//     console.log("button clicked ")
// } we can use this function as follow

let myLeads = []
// 1st way to conver to string myLeads =JASON.parse(myLeads)
//   myLeads =JASON.stringify(myLeads)


const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const inputBtn = document.getElementById("input-btn")


// HINTS:
// LOCAL STORAGE CAN ONLY STORE STRING 
// localStorage.setItem(key, value)
// localStorage.getItem(key)
// localStorage.clear()
// PS: both key and value need to be strings
//Local Storage  STACK OVERFLOW

// 1. store the delete button in deletebtn

const deleteBtn = document.getElementById("delete-btn")


// {"lead1",lead2}  or NULL
//const not let because we are not re assigning it 
const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))
// 1. Check if leadsFromLocalStorage is truthy
// 2. If so, set myLeads to its value and call renderLeads()

deleteBtn.addEventListener("dblclick", function () {
    localStorage.clear()
    myLeads = []
    renderLeads(myLeads)
})

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads(myLeads)
}

inputBtn.addEventListener("click", function () {
    myLeads.push(inputEl.value)
    // console.log(myLeads)
    // console.log("BUtton clicked from addEventListener")
    // clear out the input field

    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    inputEl.value = ""
    renderLeads()

})



function renderLeads(Leads) {
    let listItems = ""
    for (let i = 0; i < Leads.length; i++) {
        //ulEl.textContent+= myLeads[i] + " "
        //  ulEl.innerHTML +="<li>" + myLeads[i] +"<li>" 
        // create element
        // set text content
        // append to ul
        // const li =document.createElement(li)
        // li.textContent = myLeads[i]
        // ulEl.append(li)
        //wrap the lead on anchor tag(<a>) to lokk it like link
        // can you make the link open in new tab

        // listItems += "<li><a target ='_blank' href='" + myLeads[i] +"'>" + myLeads[i] +"</a><li>" 
        listItems += `
    <li>
        <a target='_blank' href="${Leads[i]}">
            ${Leads[i]}
        </a>
    </li>`
        // ${to make the string template }
    }
    ulEl.innerHTML = listItems
}
