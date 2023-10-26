import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { Livro } from 'src/app/Livro';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit{

  book?: Livro;
  private baseApiUrl = 'http://localhost:8000/api/livros';

  constructor(private booksService: BooksService, private route: ActivatedRoute, private router: Router){}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.booksService.getBookId(Number(id)).subscribe((book) => {
      this.book = book;
    });

    throw new Error('Method not implemented.');
  }

  async removeHandler(id: number){
    this.booksService.deleteBook(id).subscribe();
    this.router.navigate(['/']);
  }

}
