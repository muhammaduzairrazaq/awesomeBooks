class Books {
  constructor() {
    this.booktitle = 'Lorem ipsum';
    this.bookauthor = 'Testeroo Testyy';
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
}

const booksobjects = [];

const displayBooks = () => {
  let bookData = '';
  for (let i = 0; i < booksobjects.length; i += 1) {
    bookData += `<p>${booksobjects[i].bookTitle}</p>
        <p>${booksobjects[i].bookAuthor}</p>
        <button id="remove-book" onclick="removeBook(${i})">Remove</button>
        <hr>`;
  }

  document.getElementById('books-container').innerHTML = bookData;
};

// eslint-disable-next-line no-unused-vars
function removeBook(index) {
  booksobjects.splice(index, 1);
  displayBooks();
}

document.getElementById('add-books').addEventListener('click', () => {
  const title = document.getElementById('book-title').value;
  const author = document.getElementById('book-author').value;
  const book = new Books();
  book.bookTitle = title;
  book.bookAuthor = author;
  booksobjects.push(book);
  displayBooks();
});
