import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
  listTempBook: Book[] = [];
  totalBook = 0;

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll() {
    // this.books = this.bookService.getAll();
    this.bookService.getAll().subscribe(books => {
      this.books = books;
      this.totalBook = this.books.length;
      this.listTempBook = books;
    });
  }

  // @Output()
  // searchEvent = new EventEmitter<string>();

  search(value: string) {
      let listBook = [];
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.listTempBook.length; i++) {
        if (this.listTempBook[i].title.toLowerCase().includes(value.toLowerCase())) {
          listBook.push(this.listTempBook[i]);
        }
      }
      this.books = listBook;
      this.totalBook = this.books.length;
  }
}
