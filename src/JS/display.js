let txt = [
  {
    company: "OnePlus",
    model: "Nord2",
    memory: 6,
    price: "27000",
    Quantity: 50,
    Rating: 4.1,
  },
  {
    company: "Samsung",
    model: "Galaxy S23",
    memory: 12,
    price: "125000",
    Quantity: 20,
    Rating: 4.9,
  },
  {
    company: "OnePlus",
    model: "11",
    memory: 8,
    price: "56000",
    Quantity: 40,
    Rating: 4.8,
  },
  {
    company: "Redmi",
    model: "Note 12",
    memory: 6,
    price: "25000",
    Quantity: 50,
    Rating: 4.3,
  },
  {
    company: "Oppo",
    model: "Find X2",
    memory: 12,
    price: "80000",
    Quantity: 30,
    Rating: 3.9,
  },
  {
    company: "Vivo",
    model: "X80 pro",
    memory: 10,
    price: "76000",
    Quantity: 30,
    Rating: 4.4,
  },
];
let body = document.getElementById("tbdy");
let foot = document.getElementById("tft");
let row, c1, c2, c3, c4;
function display() {
  for (let i = 0; i < txt.length; i++) {
    row = body.insertRow(-1);
    c1 = row.insertCell(0);
    c2 = row.insertCell(1);
    c3 = row.insertCell(2);
    c4 = row.insertCell(3);
    c5 = row.insertCell(4);
    c6 = row.insertCell(5);
    c1.innerText = txt[i].company;
    c2.innerText = txt[i].model;
    c3.innerText = txt[i].memory;
    c4.innerText = txt[i].price;
    c5.innerText = txt[i].Quantity;
    c6.innerText = txt[i].Rating;
  }
}
display();
function searching() {
  let s_val = document.getElementById("select").value;
  let srch_val = document.getElementById("search").value;
//   console.log(s_val)
  for (let i = 0; i < txt.length; i++) {
    console.log(txt[0].s_val)  
    console.log(srch_val)
    console.log();
    if (txt[i].s_val == srch_val) {
      row = body.insertRow(-1);
      c1 = row.insertCell(0);
      c2 = row.insertCell(1);
      c3 = row.insertCell(2);
      c4 = row.insertCell(3);
      c5 = row.insertCell(4);
      c6 = row.insertCell(5);
      c1.innerText = txt[i].company;
      c2.innerText = txt[i].model;
      c3.innerText = txt[i].memory;
      c4.innerText = txt[i].price;
      c5.innerText = txt[i].Quantity;
      c6.innerText = txt[i].Rating;
      console.log(c1,c2,c3,c4,c5,c6)
    }
  }
}
