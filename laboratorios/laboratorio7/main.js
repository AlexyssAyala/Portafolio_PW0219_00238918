let carnet_field = document.querySelector("#carnet_field")
let schedule_list = document.querySelector("#schedule_field")
let late_switch = document.querySelector("#late_switch")
let submit_btn=document.querySelector("#submit_btn")
let tbody=document.querySelector("#table_body")
let carnet_regex = new RegExp("^[0-9]{8}$")
let addStudent =(obj) =>{
let new_row = document.createElement("tr")
let datetime = new Date()
new_row.classList.add("table-active")
new_row.innerHTML = 
`<td>${obj.carnet}</td>
<td>${obj.schelude}</td>
<td>${datetime.toLocaleString()}</td>
<td>${obj.late}</td>`
tbody.appendChild(new_row)
}
let parseLateBool=(value)=>{
if(value){
return "si"
}else{
return " no"
}
}
submit_btn.addEventListener("click", ()=>{
let carnet = carnet_field.value
let schelude = schedule_list.options[schedule_list.selectedIndex].text
let late =parseLateBool(late_switch.checked)
let result_obj ={
    "carnet":carnet,
    "schelude":schelude,
    "late":late
}
if(carnet_regex.test(carnet)){
addStudent(result_obj)
}else{
    alert("formato incorrecto de carnet")
}
})
carnet_field.addEventListener("keyup", (event)=>{
if(event.keyCode == 13){
submit_btn.click()
}
})