import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { catchError, map, tap } from "rxjs/operators";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Injectable()
export class GithubService {
  private username: string;
  private client_id: string = "851875c9e811f1760e21";
  private client_secret: string = "8957cd91e66e6f7472de8e14927eb8914acfe0f0";

  constructor(private http: Http) {
    console.log("Github Service Ready!");
    this.username = "scdoran";
  }

  ngOnInit() { }

  /** Log a HeroService message with the MessageService */
  private log(message: string) {
    console.log(message);
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = "operation", result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getUser() {
    return this.http
      .get(`http://api.github.com/users/${this.username}?client_id=${this.client_id}&client_secret=${this.client_secret}`)
      .pipe(
        map(res => res.json()),
        catchError(this.handleError(`Failed getting ${this.username} by ${this.client_id} and ${this.client_secret}`))
      );
  }

  getRepos() {
    return this.http
      .get(`http://api.github.com/users/${this.username}/repos?=${this.client_id}&client_secret=${this.client_secret}`)
      .pipe(
        map(res => res.json()),
        catchError(this.handleError(`Failed getting ${this.username} by ${this.client_id} and ${this.client_secret}`))
      );
  }
}