import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {BookListComponent} from './book-list/book-list.component';
import {BookCreateComponent} from './book-create/book-create.component';
import {BookEditComponent} from './book-edit/book-edit.component';
import {BookDeleteComponent} from './book-delete/book-delete.component';
import {BookViewComponent} from './book-view/book-view.component';


const routes: Routes = [
  {
    path: 'list',
    component: BookListComponent
  },
  {
    path: 'create',
    component: BookCreateComponent
  },
  {
    path: 'edit/:id',
    component: BookEditComponent
  },
  {
    path: 'delete/:id',
    component: BookDeleteComponent
  },
  {
    path: 'view/:id',
    component: BookViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookRoutingModule { }
