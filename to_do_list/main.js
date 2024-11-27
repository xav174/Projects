const btn = document.getElementById("addButton");
const input = document.getElementById("text")
const listContainer = document.getElementById("listOfItems"); 
btn.addEventListener('click', addToDo);
input.addEventListener('keypress', function(event){
    if (event.key === "Enter") {
        event.preventDefault();
        btn.click();
    }
});

function addToDo() {
    if(input.value === ""){
        alert("Keine ToDo vorhanden");
    }
    else{
        // Listen Element erstellen
        let listItem = document.createElement('li');
        listItem.innerHTML = input.value;
        listContainer.appendChild(listItem);
    
        // Button zum löschen erstellen
        let deleteButton = document.createElement('button');
        deleteButton.innerHTML = "&#10008;";
        deleteButton.className = "delete-button"; //gibt deleteButton eine Klasse 
        listItem.appendChild(deleteButton);
    }
    input.value = '';
    saveData();
}

listContainer.addEventListener('click', function(e){
    if (e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "BUTTON"){
        e.target.parentElement.remove();
        saveData();
    }
}, false); 
function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
 }

function showList() {
    listContainer.innerHTML = localStorage.getItem("data");
 }
showList();