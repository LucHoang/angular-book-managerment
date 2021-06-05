import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/book';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  books: Book[] = [];
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
    });
  }
}
