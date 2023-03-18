import {id,name,salary} from "./module_content.js";
const body = document.getElementById("tbdy");
let txt=""
function display() {
    txt = "<tr><td>"+id+"</td><td>"+name+"</td><td>"+salary+"</td></tr>"
    body.innerHTML=txt
}
display()