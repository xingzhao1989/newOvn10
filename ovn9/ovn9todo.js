const listButton = document.getElementById('addToList');
listButton.addEventListener('click', addItem)

function addItem(){
    let list = document.getElementById("list");
    let input = document.getElementById("listInput").value;
    let li = document.createElement("li");
    li.setAttribute('id', input);
    li.appendChild(document.createTextNode(input));
    list.appendChild(li);
}