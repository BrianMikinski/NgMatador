import { Component, Input } from '@angular/core';
import { Profile } from '../profile-modal/Profile';

@Component({
  selector: 'app-profile-display',
  templateUrl: './profile-display.component.html',
  styleUrl: './profile-display.component.scss'
})
export class ProfileDisplayComponent {

    @Input()
    profile: Profile;
}
