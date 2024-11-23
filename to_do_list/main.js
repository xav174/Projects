let btn = document.getElementById("addButton");
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

    

    listItem.appendChild(deleteButton);

    list.appendChild(listItem);
    document.querySelector('#text').value = '';

}