import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

import 'rxjs/add/operator/map';

import { User } from "../user";
import { Repo } from '../repo';
import { Observable } from 'rxjs/observable';

@Injectable()
export class GithubService {
  private username: string;
  private client_id: string = '851875c9e811f1760e21';
  private client_secret: string = '8957cd91e66e6f7472de8e14927eb8914acfe0f0';

  constructor(private http: Http) { }

  getUser(username: string): Observable<User>{  
    return this.http.get(`http://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }

  getRepos(username: string): Observable<Repo[]> {    
    return this.http.get(`http://api.github.com/users/${username}/repos?=${this.client_id}&client_secret=${this.client_secret}`)
      .map(res => res.json());
  }

  updateUser(login: string){
    this.username = login
  }
}