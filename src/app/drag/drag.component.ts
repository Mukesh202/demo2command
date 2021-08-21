import { Component, OnInit } from '@angular/core';
import { BookService } from '../service/book.service';
import { Book } from '../service/book';

@Component({
    selector: 'app-drg',
    templateUrl: './drg.component.html',
    styleUrls: ['./drg.component.css']
})
export class DrgComponent  {

    // availableBooks: Book[] = [];
    // favoriteBooks: Book[] = [];
    // draggedBook: Book;
    // constructor(private bookService: BookService) { }

    // ngOnInit() {
    //     this.bookService.getAllBooks().then(books => this.availableBooks = books);
    //     this.bookService.getFavoriteBooks().then(books => this.favoriteBooks = books);
    //     console.log(this.availableBooks);
    // }
    // dragStart(event: any, book: Book) {
    //     this.draggedBook = book;
    // }
    // drop(event: any) {
    //     if (this.draggedBook) {
    //         let draggedBookIndex = this.findIndex(this.draggedBook);
    //         this.favoriteBooks = [...this.favoriteBooks, this.draggedBook];
    //         this.availableBooks = this.availableBooks.filter((val, i) => i != draggedBookIndex);
    //         this.draggedBook = {
    //           name: null,
    //           price: null,
    //           author: null,
    //           serialNo: null
    //       };;
    //     }
    // }
    // dragEnd(event: any) {
    //     this.draggedBook =  {
    //       name: null,
    //       price: null,
    //       author: null,
    //       serialNo: null
    //   };
    // }

    // findIndex(book: Book) {
    //     let index = -1;
    //     for (let i = 0; i < this.availableBooks.length; i++) {
    //         if (book.name === this.availableBooks[i].name) {
    //             index = i;
    //             break;
    //         }
    //     }
    //     return index;
    // }

}
