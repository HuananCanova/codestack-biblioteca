import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Livro } from '../Livro';
import { Response } from '../Response';

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  private baseApiUrl = 'http://localhost:8000/api/livros';
  
  constructor(private http: HttpClient) { }

/*   getBooks(): Observable<Response<Livro[]>> {
    console.log('entrou no get books');
    return this.http.get<Response<Livro[]>>(this.baseApiUrl);
  } */

  getBooks(): Observable<Livro[]> {
    console.log('entrou no get books');
    return this.http.get<Livro[]>(this.baseApiUrl);
  }

  getBookId(id: number): Observable<Livro> {
    const url = `${this.baseApiUrl}/${id}`;
    return this.http.get<Livro>(url);
  }

  createBook(formData: FormData): Observable<FormData> {
    return this.http.post<FormData>(this.baseApiUrl, formData);
  }

  updateBook(id: number, book: Livro): Observable<Livro> {
    const url = `${this.baseApiUrl}/${id}`;
    return this.http.put<Livro>(url, book);
  }

  deleteBook(id: number): Observable<Livro> {
    const url = `${this.baseApiUrl}/${id}`;
    return this.http.delete<Livro>(url);
  }
}
