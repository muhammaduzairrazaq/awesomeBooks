/* eslint-disable import/prefer-default-export */
export class Book {
  constructor(title = 'Lorem ipsum', author = 'Testero Testy') {
    this.title = title;
    this.author = author;
  }

  set bookTitle(title) {
    this.title = title;
  }

  set bookAuthor(author) {
    this.author = author;
  }

  get bookTitle() {
    return this.title;
  }

  get bookAuthor() {
    return this.author;
  }

  toPlainObject() {
    return { title: this.title, author: this.author };
  }

  static fromPlainObject(obj) {
    return new Book(obj.title, obj.author);
  }
}
