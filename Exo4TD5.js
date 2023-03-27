function addRow() {
    const table = document.getElementById("myTable");
    const newRow = table.insertRow();
    const cell1 = newRow.insertCell();
    const cell2 = newRow.insertCell();
    cell1.innerHTML = "Prénom : <input type='text'>";
    cell2.innerHTML = "Nom : <input type='text'>";
}

function deleteRow() {
    const table = document.getElementById("myTable");
    const numRows = table.rows.length;
    if (numRows > 1) {
        table.deleteRow(numRows - 1);
    }
}

function deleteAll() {
    const body = document.getElementsByTagName("body")[0];
    body.innerHTML = "";
}

function addRows() {
    const numToAdd = parseInt(prompt("Combien de lignes souhaitez-vous ajouter ?"));
    if (isNaN(numToAdd)) {
        alert("Veuillez entrer un nombre valide.");
        return;
    }
    const table = document.getElementById("myTable");
    for (let i = 0; i < numToAdd; i++) {
        const newRow = table.insertRow();
        const cell1 = newRow.insertCell();
        const cell2 = newRow.insertCell();
        cell1.innerHTML = "Prénom : <input type='text'>";
        cell2.innerHTML = "Nom : <input type='text'>";
    }
}