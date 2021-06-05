import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookRoutingModule } from './book-routing.module';
import {BookListComponent} from './book-list/book-list.component';
import { BookCreateComponent } from './book-create/book-create.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { BookEditComponent } from './book-edit/book-edit.component';
import { BookDeleteComponent } from './book-delete/book-delete.component';
import { BookViewComponent } from './book-view/book-view.component';


@NgModule({
  declarations: [BookListComponent, BookCreateComponent, BookEditComponent, BookDeleteComponent, BookViewComponent],
  imports: [
    CommonModule,
    BookRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class BookModule { }
