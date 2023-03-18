const API_URL = "https://jsonplaceholder.typicode.com/todos";
async function fetchUsers() {
  const response = await fetch(API_URL);
  const users = await response.json();
  return users;
}
let body = document.getElementById("tbdy");
fetchUsers().then((users) => {
  users;
  let txt = "";
  users.forEach(element => {
    txt+="<tr><td>"+element.id+"</td><td>"+element.title+"</td><td>"+element.completed+"</td></tr>";
  });
  body.innerHTML = txt;
});
