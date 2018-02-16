import { Component, OnChanges, Input } from '@angular/core';

import { GithubService } from '../../services/github.service';
import { Repo } from "../../repo";
import { User } from "../../user";

@Component({
  selector: "app-user-repos",
  templateUrl: "./user-repos.component.html",
  styleUrls: ["./user-repos.component.css"]
})
export class UserReposComponent implements OnChanges {
  repos: Repo[];
  user: User;
  @Input() username: string;

  constructor(private githubService: GithubService) {}

  ngOnChanges() {
    this.getRepos();
  }

  getRepos() {
    this.githubService.getRepos(this.username).subscribe(repos => {
      this.repos = repos;
    });
  }
}
