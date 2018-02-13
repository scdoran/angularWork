import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any;
  repos: any;

  constructor(private githubService: GithubService) { }

  ngOnInit() {
    this.githubService.getUser().subscribe(user=>{
        this.user = user;
    });

    this.githubService.getRepos().subscribe(repos => {
      this.repos = repos;
      console.log(repos);
    });
  }

}
