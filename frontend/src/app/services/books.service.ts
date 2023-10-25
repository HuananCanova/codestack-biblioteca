import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../Livro';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private baseApiUrl = 'http://localhost:8000/api/livros';
  constructor(private http: HttpClient) { }

  createBook(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.baseApiUrl, formData);
  }
}
