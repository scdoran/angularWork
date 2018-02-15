import { Component } from '@angular/core';

import { GithubService } from '../../services/github.service';
import { User } from '../../user';

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"],
})
export class ProfileComponent {
  user: User;
  username: string = 'scdoran';

  constructor(private githubService: GithubService) {
    this.getUser();
  }

  getUser() {
    this.githubService.getUser(this.username).subscribe(user => {
      this.user = user;
    });
  }
}
