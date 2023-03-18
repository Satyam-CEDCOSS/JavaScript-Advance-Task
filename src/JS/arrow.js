const body = document.getElementById("tbdy");
function pridict() {
    let txt = ""
    let first = document.getElementById("s_year").value;
    let last = document.getElementById("e_year").value;
    console.log(first)
    console.log(last)
    const full_date = (d,m,y) => {
        return new Date(d+"-"+m+"-"+y)
    }
    for(i=first;i<=last;i++){
        for(j=0;j<12;j++){
            if(5==full_date(i,j,13).getDay()){                 
                    txt += "<tr><td>Fri</td><td>"+"13"+"</td><td>"+j+"</td><td>"+i+"</td></tr>"
                }       
        }
    }
    body.innerHTML=txt;
}