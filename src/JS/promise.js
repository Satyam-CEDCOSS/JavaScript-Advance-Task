let a=10;
let b=5
function fun(a,b) {
  let promise = new Promise(function(resolve, reject){
    if(a/b){
      resolve("Ok")
    }
    else{
      reject("Reject")
    }
  })
  
  setTimeout(function() {
    console.log(promise)
  }, 2000);  
}
fun(a,b)
