//intitilize the count
let countEl=document.getElementById("count")
let count =0
// console.log(countEl)
function increment(){
    count=count+1
    countEl.innerText=count
}
let savedEl=document.getElementById("saved")
function start(){
   let countStr= count + " - "
   savedEl.textContent  +=  countStr
   countEl.textContent=0

}