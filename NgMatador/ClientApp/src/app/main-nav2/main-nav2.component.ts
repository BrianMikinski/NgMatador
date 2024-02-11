import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Profile } from '../profile-modal/Profile';
import { ProfileComponent } from '../profile-modal/profile-modal.component';
import { ProfileService } from '../profile-modal/profile.service';

@Component({
    selector: 'app-main-nav2',
    templateUrl: './main-nav2.component.html',
    styleUrls: ['./main-nav2.component.css']
})
export class MainNav2Component implements OnInit {

    isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
        .pipe(
            map(result => result.matches)
    );

    profile$: Observable<Profile> | undefined;

    constructor(private breakpointObserver: BreakpointObserver,
        private profileService: ProfileService,
        private profileDialog: MatDialog) {

    }

    ngOnInit(): void {
        this.profileService.getProfileHttp();
    }

    showProfileDialog() {

        const profileDialogRef = this.profileDialog.open<ProfileComponent, Profile>(ProfileComponent, {});

        profileDialogRef.afterClosed().subscribe( () => {
            this.profile$ = this.profileService.getProfileValue();
        })
    }
}
