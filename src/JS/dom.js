const group = document.getElementsByTagName("h1");
// console.log(group[2].className)
function action() {
  const group = document.getElementsByTagName("h1");
  for (let i = 0; i < group.length; i++) {
    if (group[i].className != "bingo") {
      const sel = document.createElement("h2");
      sel.innerHTML = "Heading 1";
      group[i].parentNode.replaceChild(sel,group[i]);
    }
  }
}
