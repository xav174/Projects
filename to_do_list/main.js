const btn = document.getElementById("addButton");
const input = document.getElementById("text")
btn.addEventListener('click', addToDo);

function addToDo() {

    const note = document.querySelector('#text').value;
    if (note.trim() === '') return // Leere Einträge werden ignoriert
    const list = document.querySelector('ul'); 
    
    // Listen Element erstellen
    const listItem = document.createElement('li');
    listItem.textContent = note;

    // Button zum löschen erstellen
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = "&#10008;";

    deleteButton.className = "delete-button"; //gibt deleteButton eine Klasse 

    //Beim klicken löschen vom listItem
    deleteButton.addEventListener('click', () => {
        list.removeChild(listItem);
    });

    listOfItems.addEventListener('click', function(e){
        if (e.target.tagName === 'LI') {
            e.target.classList.toggle("checked");
        }
    }); 

    //Buttons hinzufügen
    function addButtons(item) {
        item.innerHTML = note;
        item.appendChild(deleteButton);
    }

    addButtons(listItem);

    list.appendChild(listItem);
    input.value = '';

}