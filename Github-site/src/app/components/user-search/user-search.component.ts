import { Component, OnInit } from '@angular/core';
// Services
import { GithubService } from '../../services/github.service';
// Import user and repo classes
import { User } from "../../user";
import { Repo } from '../../repo';

@Component({
  selector: "app-user-search",
  templateUrl: "./user-search.component.html",
  styleUrls: ["./user-search.component.css"]
})
export class UserSearchComponent implements OnInit {
  private user: User;
  private repos: Repo;
  private username: string;

  constructor(private githubService: GithubService) { }

  ngOnInit() { }

  searchUser() {
    this.githubService.updateUser(this.username);

    this.githubService.getUser(this.username).subscribe(user => {
      this.user = user;
    })

    this.githubService.getRepos(this.username).subscribe(repos => {
      this.repos = repos;
    });
  }
}
