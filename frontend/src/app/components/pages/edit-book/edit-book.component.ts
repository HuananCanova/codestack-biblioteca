import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BooksService } from 'src/app/services/books.service';
import { Livro } from 'src/app/Livro';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit{

  book!: Livro;
  btnText = 'Atualizar';

  constructor(private booksService: BooksService, private route: ActivatedRoute, private router: Router){

  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.booksService.getBookId(Number(id)).subscribe((book) => {
      this.book = book;
    });
  }

  async editHandler(bookData: Livro) {
    if (!this.book.id) {
      // Trate o caso em que o ID do livro não está definido.
      return;
    }
  
    const id = this.book.id;
  
    // Atualize o livro diretamente com seus dados.
    const updatedBook: Livro = {
      id,
      titulo: bookData.titulo,
      autor: bookData.autor,
      classificacao: bookData.classificacao,
      resenha: bookData.resenha,
      data_adicao: bookData.data_adicao,
    };
  
    await this.booksService.updateBook(id, updatedBook).subscribe();
  
    this.router.navigate(['/']);
  }
  

}
