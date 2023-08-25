class Books {
  constructor(title = 'Lorem ipsum', author = 'Testero Testy') {
    this.booktitle = title;
    this.bookauthor = author;
  }

  set bookTitle(title) {
    this.booktitle = title;
  }

  set bookAuthor(author) {
    this.bookauthor = author;
  }

  get bookTitle() {
    return this.booktitle;
  }

  get bookAuthor() {
    return this.bookauthor;
  }

  toPlainObject() {
    return { title: this.booktitle, author: this.bookauthor };
  }

  static toClassObject(obj) {
    return new Books(obj.title, obj.author);
  }
}

function parseString() {
  const localstorageData = JSON.parse(localStorage.getItem('data'));
  const localstorageDataObj = localstorageData.map((booksData) => Books.toClassObject(booksData));
  return localstorageDataObj;
}

// let booksobjects = [];
const booksobjects = parseString();

const displayBooks = () => {
  let bookData = '';
  for (let i = 0; i < booksobjects.length; i += 1) {
    bookData += `<p>${booksobjects[i].bookTitle}</p>
        <p>${booksobjects[i].bookAuthor}</p>
        <button class="remove-book" onclick="removeBook(${i})">Remove</button>
        <hr>`;
  }

  document.getElementById('books-container').innerHTML = bookData;
};

function dataStorage() {
  const dataToStore = booksobjects.map((book) => book.toPlainObject());
  localStorage.setItem('data', JSON.stringify(dataToStore));
}

// eslint-disable-next-line no-unused-vars
function removeBook(index) {
  booksobjects.splice(index, 1);
  dataStorage();
  displayBooks();
}

document.getElementById('add-books').addEventListener('click', () => {
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  const book = new Books();
  book.bookTitle = title;
  book.bookAuthor = author;
  booksobjects.push(book);
  dataStorage();
  displayBooks();
});

const titleInput = document.querySelector('#book-title');
const authorInput = document.querySelector('#book-author');

function dataStorage2() {
  const formData = {
    title: titleInput.value,
    author: authorInput.value,
  };
  localStorage.setItem('data2', JSON.stringify(formData));
}

const elements = [titleInput, authorInput];
for (let i = 0; i < elements.length; i += 1) {
  elements[i].addEventListener('focusout', dataStorage2);
}
const userData = JSON.parse(localStorage.getItem('data2'));
if (userData) {
  titleInput.value = userData.title;
  authorInput.value = userData.author;
}

displayBooks();
