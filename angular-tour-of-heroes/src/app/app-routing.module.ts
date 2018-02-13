import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroesComponent } from './heroes/heroes.component'
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

const routes: Routes = [
  // localhost:4200/heroes will create the HeroesComponent, etc
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  // Default that will redirect to the dashboard component 
  // and will fill the remainder of address with '/dashboard'
  { path: '', redirectTo:'/dashboard', pathMatch: 'full' }
];

@NgModule({
  // Routermodule.forRoot is going to configure it to the routes array
  // forRoot performs the initial navigation based on the URL
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
