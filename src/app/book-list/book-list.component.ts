import { Component, OnInit } from '@angular/core';
import {BookModel} from "../model/book.model";
import {BookService} from "../service/book.service";
import {Router} from "@angular/router";
import {NoteModel} from "../model/note.model";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  listBook: BookModel[] = [];
  bookLength: number;

  constructor(private bookService: BookService,private router: Router) {
    this.bookService.getAllBooks().subscribe(list => {
      console.log(list);
      this.listBook = list;
      this.bookLength = this.listBook.length;
    });

  }

  ngOnInit(): void {

  }

  view(book: BookModel) {
    this.bookService.setBook(book);
    this.router.navigate(["/book-detail"])
  }
  delete(book: BookModel) {
    this.bookService.setBook(book);
    this.router.navigate(["book-delete"]);
  }

  edit(book: BookModel) {
    this.bookService.setBook(book);
    this.router.navigate(["/book-edit"]);
  }

}
