let a = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
let temp = 1;
function action(val) {
  console.log(val.id);
  
  if (temp % 2 == 0) {
    if (a[val.id-1]==-1){
      document.getElementById(val.id).innerHTML = "o";
      a[val.id-1]=0;
      temp++;
    }
  } else {
    if (a[val.id-1]==-1) {
      document.getElementById(val.id).innerHTML = "x";
      a[val.id-1]=1;
      temp++;
    }
  }
  var bo = loop()
  if (bo==true){
    alert("You Won")
  }
}
function loop() {
  for (let i = 0; i < 3; i++) {
    if ((a[i]==a[i+3]) && (a[i]==a[i+6]) && a[i]!=-1){
      return true
    }
  }
  for (let i = 0; i < 9; i+=3){
    if ((a[i]==a[i+1]) && (a[i]==a[i+2]) && a[i]!=-1){
      return true
    }
  }
  if ((a[0]==a[4]) && (a[0]==a[8]) && a[0]!=-1){
    return true
  }
  else if ((a[2]==a[4]) && (a[2]==a[6]) && a[2]!=-1){
    return true
  }
}