import { Component, NgZone, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';
import { Livro } from 'src/app/Livro';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  allBooks: Livro[] = []
  books: Livro[] = []

  constructor(private booksService: BooksService) { }

  
  ngOnInit(): void {
    this.booksService.getBooks().subscribe((items) => {
      this.allBooks = items;
      this.books = items;
    }
    );
  }
}