// function to check recommended weight ,over weight,under weight
function checkWeight() {
    debugger
    var age = document.getElementById("age").value; //get age from user.
    var weight = document.getElementById("weight").value; //get weight from user.
    if ((age>=5 && age<=20) && (weight>=15 && weight<=40)){
        if (age >= 5 && age <= 7){
            if(weight>20){
                overweight()
            }
            else if(weight<15){
                underweight()
            }
            else{
                fit()
            }
        }
        else if (age >= 8 && age <= 10){
            if(weight>25){
                overweight()
            }
            else if(weight<21){
                underweight()
            }
            else{
                fit()
            }
        }
        else if (age >= 11 && age <= 15){
            if(weight>30){
                overweight()
            }
            else if(weight<26){
                underweight()
            }
            else{
                fit()
            }
        }
        else if (age >= 16 && age <= 20){
            if(weight>31){
                overweight()
            }
            else if(weight<40){
                underweight()
            }
            else{
                fit()
            }
        }
    }
    else{
        document.getElementById("p").innerHTML="Enter in range:"
  }
}
function underweight(){
    document.getElementById("p").innerHTML="Underweight:"
}
function overweight(){
    document.getElementById("p").innerHTML="Overweight:"
}
function fit(){
    document.getElementById("p").innerHTML="Fit:"
}