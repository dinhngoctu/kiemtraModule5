import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {BookModel} from "../model/book.model";

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  book: BookModel;

  constructor(private bookService: BookService) {
    this.bookService.getBook().subscribe(b => this.book=b);
  }

  ngOnInit(): void {
  }

}
