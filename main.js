const table = document.querySelector('table').querySelector('tbody')

const rows = []

const addItem = function() {

    const newRow = document.createElement('tr')
    newRow.id = table.childElementCount

    const rowInfo = {
        id: newRow.id,
        row: newRow,
        name: document.createElement('span'),
        space: document.createElement('span'),
        nameInput: document.createElement('input'),
        spaceInput: document.createElement('input'),
        saveButton: createButton('save'),
        removeButton: createButton('remove'),
        editButton: createButton('edit')
    }

    rows[rowInfo.id] = rowInfo
    addButtonsActions(rowInfo)
    rowInfo.editButton.style.display = 'none'
    insertRowInfo(newRow, rowInfo)
    table.appendChild(newRow)
}

const saveItem = function(id) {
    const info = rows[id]
    info.name.innerText = info.nameInput.value
    info.nameInput.style.display = 'none'
    info.name.style.display = 'inline'

    info.space.innerText = info.spaceInput.value
    info.spaceInput.style.display = 'none'
    info.space.style.display = 'unset'

    info.editButton.style.display = 'unset'
    info.saveButton.style.display = 'none'
}

const removeItem = function(id) {
    const row = document.getElementById(id);
    console.log()
    document.querySelector('table').querySelector('tbody').removeChild(row);
}

const editItem = function(id) {
    const info = rows[id]
    info.nameInput.style.display = 'inline'
    info.name.style.display = 'none'

    info.spaceInput.style.display = 'inline'
    info.space.style.display = 'none'

    info.editButton.style.display = 'none'
    info.saveButton.style.display = 'unset'

}

const createButton = function(name) {
    const button = document.createElement('button')
    button.innerText = name
    return button
}

const addButtonsActions = function(info) {
    info.saveButton.addEventListener('click', () => saveItem(info.id))
    info.removeButton.addEventListener('click', () => removeItem(info.id))
    info.editButton.addEventListener('click', () => editItem(info.id))
}

const insertRowInfo = function(row, info) {
    const nameCell = row.insertCell()
    nameCell.appendChild(info.nameInput)
    nameCell.appendChild(info.name)
    const spaceCell = row.insertCell()
    spaceCell.appendChild(info.spaceInput)
    spaceCell.appendChild(info.space)

    info.name.style.display = 'none'
    info.space.style.display = 'none'


    const buttonsCell = row.insertCell()
    buttonsCell.appendChild(info.saveButton)
    buttonsCell.appendChild(info.editButton)
    buttonsCell.appendChild(info.removeButton)
}



document.querySelector('button').onclick = addItem