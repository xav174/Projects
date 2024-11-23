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

    //Erstellt ein edit Button zum Bearbeiten
    const editButton = document.createElement('button');
    editButton.innerHTML = "edit";
    editButton.className = "edit-button"; // gibt editButton eine Klasse
    editButton.addEventListener('click', liToList)

    function liToList() {
        const input = document.createElement("input");
        input.type = "text";
        input.value = listItem.textContent; // li-Item Text in das Textfeld einfügen

        list.replaceChild(input, listItem);

        input.addEventListener("blur", function() {
            listItem.textContent = input.value;
            addButtons(listItem);
            list.replaceChild(listItem, input);
          });
    }

    //Buttons hinzufügen
    function addButtons(item) {
        item.innerHTML = note;
        item.appendChild(editButton);
        item.appendChild(deleteButton);
    }

    addButtons(listItem);

    list.appendChild(listItem);
    document.querySelector('#text').value = '';

}