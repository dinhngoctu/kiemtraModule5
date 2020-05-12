import { Component, OnInit } from '@angular/core';
import {BookModel} from "../model/book.model";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-book-delete',
  templateUrl: './book-delete.component.html',
  styleUrls: ['./book-delete.component.css']
})
export class BookDeleteComponent implements OnInit {
  book: BookModel;

  constructor(private bookService: BookService) {
    this.bookService.getBook().subscribe(b => this.book=b);
  }

  ngOnInit(): void {
  }

  delete() {
    this.bookService.deleteBook(this.book.id);
  }
}
