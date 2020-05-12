import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {BookModel} from "../model/book.model";
import {Router} from "@angular/router";
import {BookService} from "../service/book.service";

@Component({
  selector: 'app-book-edit',
  templateUrl: './book-edit.component.html',
  styleUrls: ['./book-edit.component.css']
})
export class BookEditComponent implements OnInit {
  bookForm: FormGroup;
  bookNeedEdit: BookModel = {
    id: 1,
    title: "",
    author: "",
    description:""
  };

  constructor(private bookService: BookService,
              private router: Router) {
    this.bookService.getBook().subscribe(b=> this.bookNeedEdit=b)
  }

  ngOnInit(): void {
    this.bookForm = new FormGroup(
      {
        id: new FormControl(this.bookNeedEdit.id),
        title: new FormControl(this.bookNeedEdit.title),
        author: new FormControl(this.bookNeedEdit.author),
        description: new FormControl(this.bookNeedEdit.description)
      });
  }

  save() {
    this.bookNeedEdit = this.bookForm.value;
    console.log(this.bookNeedEdit);
    this.bookService.editBook(this.bookNeedEdit);
  }

}
