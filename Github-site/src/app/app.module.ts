import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { GithubService } from '../app/services/github.service';
import { UserSearchComponent } from './components/user-search/user-search.component';
import { UserReposComponent } from './components/user-repos/user-repos.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    UserSearchComponent,
    UserReposComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [GithubService],
  bootstrap: [AppComponent]
})
export class AppModule { }
