/* eslint-disable import/prefer-default-export */

import { Book } from './Book.js';

export class Library {
  constructor() {
    this.books = Library.parseLocalStorage();
    this.displayBooks();
    this.initializeListeners();

    document.querySelector('#books-list').addEventListener('click', (event) => {
      if (event.target.classList.contains('remove-button')) {
        const rowIndex = event.target.getAttribute('data-index');
        this.removeBook(rowIndex);
      }
    });
  }

  static parseLocalStorage() {
    const localstorageData = JSON.parse(localStorage.getItem('data')) || [];
    return localstorageData.map((bookData) => Book.fromPlainObject(bookData));
  }

  displayBooks() {
    let bookData = '';

    for (let i = 0; i < this.books.length; i += 1) {
      bookData += `<tr>
        <td>${this.books[i].bookTitle}</td>
        <td>${this.books[i].bookAuthor}</td>
        <td><button class="remove-button" data-index="${i}">Remove</button></td>
      </tr>`;
    }
    document.getElementById('books-list').innerHTML = bookData;
  }

  dataStorage() {
    const dataToStore = this.books.map((book) => book.toPlainObject());
    localStorage.setItem('data', JSON.stringify(dataToStore));
  }

  removeBook(index) {
    this.books.splice(index, 1);
    this.dataStorage();
    this.displayBooks();
  }

  addBook(title, author) {
    const book = new Book();
    book.bookTitle = title;
    book.bookAuthor = author;
    this.books.push(book);
    this.dataStorage();
    this.displayBooks();
  }

  initializeListeners() {
    document.getElementById('add-books').addEventListener('click', () => {
      const title = document.getElementById('book-title').value;
      const author = document.getElementById('book-author').value;
      this.addBook(title, author);
    });

    const titleInput = document.querySelector('#book-title');
    const authorInput = document.querySelector('#book-author');

    const dataStorage2 = () => {
      const formData = {
        title: titleInput.value,
        author: authorInput.value,
      };
      localStorage.setItem('data2', JSON.stringify(formData));
    };

    const elements = [titleInput, authorInput];
    elements.forEach((element) => {
      element.addEventListener('focusout', dataStorage2);
    });

    const userData = JSON.parse(localStorage.getItem('data2'));
    if (userData) {
      titleInput.value = userData.title;
      authorInput.value = userData.author;
    }
  }
}
