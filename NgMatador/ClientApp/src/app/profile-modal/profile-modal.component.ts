import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { ProfileService } from './profile.service';
import { Profile } from './Profile';
import { Observable, Subscription } from 'rxjs';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-profile',
    templateUrl: './profile-modal.component.html',
    styleUrl: './profile-modal.component.scss'
})
export class ProfileComponent implements OnInit, OnDestroy {

    profile$: Observable<Profile>;

    /**
     * Not using this but if we wanted to, we could
     */
    private profile: Profile;

    profileForm: FormGroup;

    emailRegx = /^(([^<>+()\[\]\\.,;:\s@"-#$%&=]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,3}))$/;

    /**
     * Tow different methods of managing subscriptions
     */
    subscriptions: Subscription[] = [];

    masterSubscription: Subscription = new Subscription();

    constructor(private dialogRef: MatDialogRef<ProfileComponent>,
        private formBuilder: FormBuilder,
        private profileService: ProfileService) {

    }

    ngOnInit(): void {

        // reactive forms
        this.profileForm = this.formBuilder.group({
            firstName: [null, [Validators.required]],
            lastName: [null, Validators.required],
            email: [null, [Validators.required, Validators.pattern(this.emailRegx)]]
        });

        this.profile$ = this.profileService.getProfileValue();

        const profileSubscription = this.profile$.subscribe({
            next: profile => {
                // we're not doing anything here, but if were we would need to unsubscribe from this
                this.profile = profile;

                this.profileForm.setValue({ // or patchValue if you only want to set part of the objects values
                    firstName: this.profile.firstName,
                    lastName: this.profile.lastName,
                    email: this.profile.email
                })
                console.log(profile);
            },
            error: error => {
                console.log(error);
            },
            complete: () => {
                console.log('Subscribe to profile complete!');
            }
        });

        /**
         * multiple methods to handle profileSubsciption
         */

        // manage an array of subscriptions
        this.subscriptions.push(profileSubscription);
        
        // or
        this.masterSubscription.add(profileSubscription);
    }

    ngOnDestroy(): void {

        this.subscriptions.forEach(subscription => {
            subscription.unsubscribe();
        });

        // or
        this.masterSubscription.unsubscribe();
    }

    submit() {

        const firstName = this.profileForm.controls["firstName"].value;
        const lastName = this.profileForm.controls["lastName"].value;
        const email = this.profileForm.controls["email"].value;

        const updatedProfile = new Profile(firstName, lastName, email);

        this.profileService.updateProfileHttp(updatedProfile).subscribe( (profile: Profile) => {
            this.profileService.setProfile(profile);
            this.dialogRef.close();
        }, (error) => {
            console.error(error)
        });
    }
}
