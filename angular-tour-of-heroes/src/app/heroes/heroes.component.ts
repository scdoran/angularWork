import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: "app-heroes",
  templateUrl: "./heroes.component.html",
  styleUrls: ["./heroes.component.css"]
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    //  Using the function we just instantiated below
    // to invoke the getHeroes function from the heroServices
    // This will retrieve the function at the appropiate time.
    this.getHeroes();
  }

  // Creating a local function that uses the getHeroes function from the heroService
  getHeroes(): void {
    // Observable data that will not work in a real app
    // this.heroes = this.heroService.getHeroes();

    // Correct way of tying in observables with data
    // Adding observable and sub is going to make the data work asynchronously.
    this.heroService
      .getHeroes()
      // Subscribe is going to pass the HEROES array and set it as heroes.
      .subscribe(heroes => (this.heroes = heroes));
  }

  add(name: string): void {
    name = name.trim();
    if (!name) {
      return;
    }
    this.heroService.addHero({ name } as Hero).subscribe(hero => {
      this.heroes.push(hero);
    });
  }

  delete(hero: Hero): void {
    this.heroes = this.heroes.filter(h => h !== hero);
    this.heroService.deleteHero(hero).subscribe();
  }
}
