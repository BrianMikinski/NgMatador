import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfileService } from './profile.service';
import { Profile } from './Profile';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-profile',
    templateUrl: './profile-modal.component.html',
    styleUrl: './profile-modal.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {

    profile$: Observable<Profile>;

    constructor(private dialogRef: MatDialogRef<ProfileComponent>, private profileService: ProfileService) {

    }

    ngOnInit(): void {

        this.profile$ = this.profileService.getProfileValue();

        this.profile$.subscribe({
            next: profile => {
                //this.profile = profile;
                console.log(profile);
            },
            error: error => {
                console.log(error);
            },
            complete: () => {
                console.log('Subscribe to profile complete!');
            }
        });
    }

    ngOnDestroy(): void {
        console.log("ng destroy called");
    }

    updateProfile(profile: Profile) {

        this.profileService.updateProfileHttp(profile).subscribe( (profile: Profile) => {
            this.profileService.setProfile(profile);
            this.dialogRef.close();
        }, (error) => {
            console.error(error)
        });
    }
}
