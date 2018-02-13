import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from "../hero";
import { HeroService } from '../hero.service';

@Component({
  selector: "app-hero-detail",
  templateUrl: "./hero-detail.component.html",
  styleUrls: ["./hero-detail.component.css"]
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  // ActivatedRoute has info about the HeroDetailComponent route containing the ID parameter
  // HeroService gets data from the remote server for the hero-to-hero display
  // Location will interact with the browser for navigation purposes
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    // '+' converts a string to a number ('3' becomes 3)
    // route.snapshot gets the static route information
    // paramMap contains all of the parameter values extracted from URL (in this case it is 'id')
    const id = +this.route.snapshot.paramMap.get("id");
    // pointing to heroService from constructor to get id and get information
    this.heroService.getHero(id).subscribe(hero => (this.hero = hero));
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    // passing in hero object to updateHero for hero.service
    this.heroService.updateHero(this.hero)
      .subscribe(()=> this.goBack());
  }
}
