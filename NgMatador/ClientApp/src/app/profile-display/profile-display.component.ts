import { Component, OnDestroy, OnInit } from '@angular/core';
import { Profile } from '../profile-modal/Profile';
import { ProfileService } from '../profile-modal/profile.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrl: './profile-display.component.scss'
})
export class ProfileDisplayComponent implements OnInit, OnDestroy {

    profile: Profile;

    subscription: Subscription;

    constructor(private profileService: ProfileService) {

    }

    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    ngOnInit(): void {

        this.subscription = this.profileService.getProfileValue().subscribe((profile) => {
            this.profile = profile;
            console.log("Profile updated via observable!");
        });   
    }


}
