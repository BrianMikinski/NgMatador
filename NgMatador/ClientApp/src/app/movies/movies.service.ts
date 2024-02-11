import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

    private apiUrl = "https://localhost:52746/api/movies";
    constructor(private http: HttpClient) { }

    public getMovies(): Observable<Array<Movie>> {
        return this.http.get<Movie[]>(this.apiUrl);
    }
}
