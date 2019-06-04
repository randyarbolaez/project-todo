let unorderedList = document.getElementById('unordered-list');

function addTodo() {
  let item = document.createElement('li');
  let todoAppText = prompt('Add ToDo!');

  createItemNode(todoAppText, item);

  unorderedList.appendChild(item);

  countTotalItems();
}

function createItemNode(todoAppText, item) {
  let userInputCreateTextNode = document.createTextNode(todoAppText);
  item.appendChild(userInputCreateTextNode);
  createDeleteButton(item);
}

function createDeleteButton(item) {
  let deleteButton = document.createElement('button');
  deleteButton.innerHTML = 'X';
  item.appendChild(deleteButton);
  deleteItem(item, deleteButton);
}

function deleteItem(item, deleteButton) {
  deleteButton.onclick = function() {
    unorderedList.removeChild(item);
    countTotalItems();
  };
}

function countTotalItems() {
  let itemLength = unorderedList.childNodes.length;
  document.getElementById(
    'item-count'
  ).innerHTML = `Item Count | ${itemLength}`;
}
