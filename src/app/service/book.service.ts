import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  getAllBooks() {
    return this.http.get<any>('assets/all-books.json')
      .toPromise()
      .then(res => <Book[]>res.data)
      .then(data => {
        return data;
      });
    }

    getFavoriteBooks() {
      return this.http.get<any>('assets/favorite-books.json')
        .toPromise()
        .then(res => <Book[]>res.data)
        .then(data => {
          return data;
        });
    }
  
  }