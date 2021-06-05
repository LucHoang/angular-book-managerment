import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  // {
  //   path: 'product',
  //   loadChildren: () => import('./product/product.module').then(module => module.ProductModule)
  // },
  {
    path: 'book',
    loadChildren: () => import('./book/book.module').then(module => module.BookModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
