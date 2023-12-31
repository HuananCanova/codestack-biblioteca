import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Livro } from 'src/app/Livro';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit{
  @Output() onSubmit = new EventEmitter<Livro>();
  @Input() btnText!: string;
  @Input() bookData: Livro | null = null;
  
  booksForm!: FormGroup


  constructor(){}

  ngOnInit(): void {
    this.booksForm = new FormGroup({
      id: new FormControl(this.bookData ? this.bookData.id: ''),
      autor: new FormControl(this.bookData ? this.bookData.autor: '', [Validators.required]),
      titulo: new FormControl(this.bookData ? this.bookData.titulo :'', [Validators.required]),
      classificacao: new FormControl(this.bookData ? this.bookData.classificacao :'', [Validators.required, Validators.min(1), Validators.max(5)]),
      resenha: new FormControl(this.bookData ? this.bookData.resenha :'', [Validators.required])
    });
  }

  get autor () { return this.booksForm.get('autor')!; }

  get titulo() { return this.booksForm.get('titulo')!; }

  get classificacao() { return this.booksForm.get('classificacao')!; }

  get resenha() { return this.booksForm.get('resenha')!; }


  submit(){
    if (this.booksForm.invalid) {
      return;
    }
    console.log(this.booksForm.value);

    this.onSubmit.emit(this.booksForm.value);

  }



}
