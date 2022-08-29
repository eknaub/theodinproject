let addBtn = document.querySelector('.add');
let table = document.querySelector('#book-table tbody')

let myLibrary = [];
let bookId = 1; //used as unique identifier for books

addBtn.addEventListener('click', addBook);

// Default Data
const book1 = new Book("Book1", "Author1", true);
const book2 = new Book("Book2", "Author2", false);
const book3 = new Book("Book3", "Author3", false);
addBookToLibrary(book1);
addBookToLibrary(book2);
addBookToLibrary(book3);
insertBookIntoTableDom(book1);
insertBookIntoTableDom(book2);
insertBookIntoTableDom(book3);

function Book(title, author, read) {
  this.id = bookId++;
  this.title = title;
  this.author = author;
  this.read = read;
}

function addBook() {
  let titleInput = document.querySelector('#title');
  let authorInput = document.querySelector('#author');
  let readInput = document.querySelector('#read');

  if(!validateInput(titleInput.value, authorInput.value)) return;

  const book = new Book(titleInput.value, authorInput.value, readInput.checked);

  addBookToLibrary(book);
  insertBookIntoTableDom(book);
}

function addBookToLibrary(book) {
  myLibrary.push(book);
}

function validateInput(title, author) {
  if(title === '' || author === '') return false;
  return true;
}

function insertBookIntoTableDom(book) {
  /*
  <table id="book-table">
    <tr>
      <td>title</td>
      <td>author</td>
      <td><button class="read">read</button>
      <button class="notread">notread</button></td>
      <td><button class="delete">delete</button></td>
    </tr>
  */
  const content = document.createElement('tr');

  const title = document.createElement('td');
  title.textContent = book.title;

  const author = document.createElement('td');
  author.textContent = book.author;

  const read = document.createElement('td');
  const readBtn = document.createElement('button');
  readBtn.classList.add(book.read ? 'read' : 'notread');
  readBtn.textContent = book.read ? 'Read' : 'Not Read';
  readBtn.onclick = function(e) {
    updateReadStatus(e.target);
  }
  read.append(readBtn);

  const deleteTd = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.classList.add('delete');
  deleteBtn.textContent = 'Delete';
  deleteBtn.onclick = function(e) {
    removeBook(e.target);
  }
  deleteTd.append(deleteBtn);

  content.append(title);
  content.append(author);
  content.append(read);
  content.append(deleteTd);

  content.setAttribute('data-key', book.id);

  table.appendChild(content);
}

function updateReadStatus(btn) {
  updateReadStatusInLibrary(btn);
  updateReadStatusInDom(btn);
}

function updateReadStatusInLibrary(btn) {
  //book id from tr
  const bookId = Number(btn.parentNode.parentNode.getAttribute('data-key'));

  myLibrary = myLibrary.map(elem => {
    if(bookId === elem.id) {
      return {...elem, read: !elem.read};
    }

    return elem;
  });
}

function updateReadStatusInDom(btn) {
  if(btn.classList[0] === 'read') {
    btn.classList.remove('read');
    btn.classList.add('notread');
    btn.textContent = 'Not Read';
  }
  else {
    btn.classList.add('read');
    btn.classList.remove('notread');
    btn.textContent = 'Read';
  }
}

function removeBook(btn) {
  removeBookInLibrary(btn);
  removeBookInDom(btn);
}

function removeBookInLibrary(btn) {
   //book id from tr
  const bookId = Number(btn.parentNode.parentNode.getAttribute('data-key'));

  myLibrary = myLibrary.filter(elem => { 
    return bookId !== elem.id;
  });
}

function removeBookInDom(btn) {
  let row = btn.parentNode.parentNode;
  row.remove();
}