import { Injectable } from '@angular/core';
import {Book} from '../model/book';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class BookService {
  // books: Book[] = [{
  //   id: 1,
  //   name: 'IPhone',
  //   author: 'a',
  //   description: 'a',
  // }, {
  //   id: 2,
  //   name: 'Samsung',
  //   author: 'a',
  //   description: 'a',
  // }, {
  //   id: 3,
  //   name: 'LG',
  //   author: 'a',
  //   description: 'a',
  // }];

  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Book[]> {
    // return this.books;
    return this.http.get<Book[]>(API_URL + '/books');
  }

  saveCategory(book): Observable<Book> {
    return this.http.post<Book>(API_URL + '/books', book);
  }

  findById(id: number): Observable<Book> {
    return this.http.get<Book>(`${API_URL}/books/${id}`);
  }

  updateCategory(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(`${API_URL}/books/${id}`, book);
  }

  deleteCategory(id: number): Observable<Book> {
    return this.http.delete<Book>(`${API_URL}/books/${id}`);
  }
}
