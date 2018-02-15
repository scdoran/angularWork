import { Component, OnInit, Input } from '@angular/core';

import { GithubService } from '../../services/github.service';
import { Repo } from "../../repo";
import { User } from "../../user";

@Component({
  selector: "app-user-repos",
  templateUrl: "./user-repos.component.html",
  styleUrls: ["./user-repos.component.css"]
})
export class UserReposComponent implements OnInit {
  repos: Repo[];
  @Input() user: User;

  constructor(private githubService: GithubService) {}

  ngOnInit() {}

  getRepos() {
    this.githubService.getRepos(this.user).subscribe(repos => {
      this.repos = repos;
    });
  }
}
