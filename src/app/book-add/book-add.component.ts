import { Component, OnInit } from '@angular/core';
import {BookService} from "../service/book.service";
import {FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";

@Component({
  selector: 'app-book-add',
  templateUrl: './book-add.component.html',
  styleUrls: ['./book-add.component.css']
})
export class BookAddComponent implements OnInit {
  bookForm: FormGroup;


  constructor(private bookService: BookService,private router: Router) {
  }

  ngOnInit(): void {
    this.bookForm = new FormGroup(
      {
        title: new FormControl(),
        author: new FormControl(),
        description: new FormControl()
      }
    )
  }
  save(){
    let book = this.bookForm.value
    this.bookService.addNewBook(book);
    console.log(book);
  };


}
