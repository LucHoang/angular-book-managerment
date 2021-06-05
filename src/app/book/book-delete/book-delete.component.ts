import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {BookService} from '../../service/book.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  bookForm: FormGroup;
  id: number;
  success = false;

  constructor(private bookService: BookService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      const book = this.getBook(this.id);
      // this.bookForm = new FormGroup({
      //   id: new FormControl(book.id),
      //   name: new FormControl(book.name),
      //   author: new FormControl(book.author),
      //   description: new FormControl(book.description),
      // });
    });
  }

  ngOnInit() {
  }

  getBook(id: number) {
    // return this.bookService.findById(id);
    return this.bookService.findById(id).subscribe(book => {
      this.bookForm = new FormGroup({
        title: new FormControl(book.title),
        author: new FormControl(book.author),
        description: new FormControl(book.description),
      });
    });
  }

  deleteBook(id: number) {
    this.bookService.deleteCategory(id).subscribe(() => {
      this.router.navigate(['/category/list']);
      // alert('Xóa thành công');
      this.success = true;
    }, e => {
      console.log(e);
      this.success = false;
    });
  }
}
