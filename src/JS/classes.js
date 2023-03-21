data=[]
class employee{
    constructor(id ,name, salary) { 
      this.id = id;
      this.name = name;
      this.salary = salary
    }
}
const body = document.getElementById("tbdy");
function insert(){
    let x = document.getElementById("ids").value;
    let y = document.getElementById("name").value;
    let z = document.getElementById("salary").value;
    data.push(new employee(x, y, z));
    display()

}

function display() {
    let txt=""
    let cnt = 0;
    let d=data.length;
    for (let i=0; i<d; i++){
        txt+="<tr><td>"+data[i].id+"</td><td>"+data[i].name+"</td><td>"+data[i].salary+"</td><td><button onclick='press("+cnt+")'>Delete</button></td></tr>";
        cnt++;
    }
    body.innerHTML = txt;
}

function press(x) {
    data.splice (x, 1);
    display()
}