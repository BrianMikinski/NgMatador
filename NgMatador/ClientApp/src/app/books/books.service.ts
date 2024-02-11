import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Book } from './Book';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

    private apiUrl = "https://localhost:52746/api/books";

    constructor(private http: HttpClient) { }

    public getBooks(): Observable<Array<Book>> {
        return this.http.get<Book[]>(this.apiUrl);
    }
}
