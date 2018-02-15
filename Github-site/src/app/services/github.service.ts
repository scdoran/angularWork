import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

@Injectable()
export class GithubService {
  private username: string;
  private client_id: string = '851875c9e811f1760e21';
  private client_secret: string = '8957cd91e66e6f7472de8e14927eb8914acfe0f0';

  constructor(private http: Http) { 
    this.username = 'scdoran';    
   }

  getUser(){
    return this.http.get(`http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }

  getRepos() {
    return this.http.get(`http://api.github.com/users/${this.username}/repos?=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }

  updateUser(login: string){
    this.username = login
  }
}