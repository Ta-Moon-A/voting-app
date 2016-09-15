import { Component, Input, OnInit  } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { HeroService } from './hero.service';
import {HeroItem} from "./heroitem";

@Component({
    selector: 'my-hero-detail',
    template: `
              <div *ngIf="hero">
              <h2>{{hero.name}} details!</h2>
              <div>
                  <label>id: </label>{{hero.id}}</div>
                  <div>
                    <label>name: </label>
                    <input [(ngModel)]="hero.name" placeholder="name" />
                  </div>
                  <button (click)="goBack()">Back</button>
              </div>
            
            `,
    styleUrls: ['../content/styles/hero-detail.component.css'],
    providers: [HeroService]
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: HeroItem;

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute) {
    }

    ngOnInit(): void {
        this.route.params.forEach((params: Params) => {
            let id = +params['id'];
            this.heroService.getHero(id)
                .then(hero => this.hero = hero);
        });
    }

    goBack(): void {
        window.history.back();
    }
}