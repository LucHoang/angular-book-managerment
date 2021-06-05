import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
  id: number;

  constructor(private bookService: BookService,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const book = this.getBook(this.id);
    });
  }

  success = false;

  ngOnInit() {
  }

  getBook(id: number) {
    // return this.bookService.findById(id);
    return this.bookService.findById(id).subscribe(book => {
      this.bookForm = new FormGroup({
        title: new FormControl(book.title, [Validators.required]),
        author: new FormControl(book.author, [Validators.required]),
        description: new FormControl(book.description, [Validators.required]),
      });
    });
  }

  updateBook(id: number) {
    const book = this.bookForm.value;
    this.bookService.updateCategory(id, book).subscribe(() => {
      // alert('Cập nhật thành công');
      this.success = true;
    }, e => {
      console.log(e);
      this.success = false;
    });
  }

}
