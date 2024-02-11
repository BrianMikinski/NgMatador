import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Profile } from './Profile';

@Injectable({
    providedIn: 'root'
})
export class ProfileService {

    private profile$: BehaviorSubject<Profile>;

    private apiUrl = "https://localhost:52746/api/profile";

    constructor(private http: HttpClient) {

        this.profile$ = new BehaviorSubject<Profile>(null);

        this.getProfileHttp();
    }

    updateProfileHttp(profile: Profile): Observable<Profile> {
        return this.http.post<Profile>(this.apiUrl, profile);
    }

    getProfileHttp(): void {

        this.http.get<Profile>(this.apiUrl).subscribe((profile: Profile) => {
            this.setProfile(profile);
        }, () => {
            console.error("Profile could not be loaded.");
        });
    }

    getProfileValue(): Observable<Profile> {
        return this.profile$.asObservable();
    }

    setProfile(profile: Profile) {
        this.profile$.next(profile);
    }
}
