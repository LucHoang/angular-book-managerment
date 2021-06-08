import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-book-create',
  templateUrl: './book-create.component.html',
  styleUrls: ['./book-create.component.css']
})
export class BookCreateComponent implements OnInit {
  bookForm: FormGroup = new FormGroup({
    // id: new FormControl(),
    title: new FormControl('', [Validators.required]),
    author: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });

  success = false;
  error = false;

  constructor(private bookService: BookService) {
  }

  ngOnInit() {
  }

  submit() {
    const book = this.bookForm.value;
    // this.bookService.saveBook(book);
    // this.bookForm.reset();
    this.bookService.saveCategory(book).subscribe(() => {
      this.bookForm.reset();
      // alert('Tạo thành công');
      this.success = true;
      this.error = false;
    }, e => {
      console.log(e);
      this.success = false;
    });
  }

  checkField() {
    // tslint:disable-next-line:triple-equals
    // if (value == '') {
    //   this.error = true;
    //   this.success = false;
    // }
    this.error = true;
    this.success = false;
  }
}
