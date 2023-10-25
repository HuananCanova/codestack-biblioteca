import { Component, OnInit } from '@angular/core';
import { Livro } from 'src/app/Livro';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  btnText = "Salvar";
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  constructor(private booksService: BooksService) { }

  async createHandler(livro: Livro){
    const formData = new FormData();
    formData.append('autor', livro.autor);
    formData.append('titulo', livro.titulo);
    formData.append('classificacao', livro.classificacao.toString());
    formData.append('resenha', livro.resenha);
  
  await this.booksService.createBook(formData).subscribe(
    (response) => {
      console.log(response);
    },
    (error) => {
      console.log(error);
    }
  );
  }
}