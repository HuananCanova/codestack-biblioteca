import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-books-form',
  templateUrl: './books-form.component.html',
  styleUrls: ['./books-form.component.css']
})
export class BooksFormComponent implements OnInit{
  @Input() btnText!: string;

  constructor(){}

  ngOnInit(): void {
      
  }
}
