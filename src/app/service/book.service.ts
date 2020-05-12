import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {BookModel} from "../model/book.model";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BookService {
  url: string = "http://localhost:3000/books";
  private books: BehaviorSubject<BookModel[]> = new BehaviorSubject([]);
  private book: BehaviorSubject<BookModel> = new BehaviorSubject<BookModel>(new class implements BookModel {
    id: number;
    title: string;
    author: string;
    description: string;
  })
  constructor(private httpClient: HttpClient) {
    this.fetchBooksFromAPI().subscribe(list => this.books.next(list))
  }
  fetchBooksFromAPI() {
    return this.httpClient.get<BookModel[]>(this.url);
  }

  getAllBooks() {
    return this.books;
  }
  setBook(book: BookModel) {
    this.book.next(book);
  }

  getBook() {
    return this.book;
  }
  addNewBook(bookModel: BookModel) {
    this.httpClient.post(this.url,bookModel).subscribe(result => console.log(result))
  }

  deleteBook(id: Number) {
    this.httpClient.delete(this.url+id).subscribe(result => console.log(result));
  }

  editBook(book: BookModel) {
    this.httpClient.put(this.url+book.id,book).subscribe(result => console.log(result));
  }
}
