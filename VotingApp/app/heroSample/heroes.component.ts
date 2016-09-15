import {Component, OnInit} from "@angular/core";
import { Router } from '@angular/router';

import { HeroItem } from "./heroitem";
import { HeroService } from './hero.service';


@Component({
    selector: 'my-heroes',
    template: `
                   <h2>My Heroes</h2>
                    <ul class="heroes">
                      <li *ngFor="let hero of heroes"  (click)="onSelect(hero)" [class.selected]="hero === selectedHero">
                        <span class="badge">{{hero.id}}</span> {{hero.name}}
                      </li>
                    </ul>
                  
                     <div *ngIf="selectedHero">
                      <h2>
                        {{selectedHero.name | uppercase}} is my hero
                      </h2>
                      <button (click)="gotoDetail()">View Details</button>
                    </div>
                 `,
    providers: [HeroService],
    styleUrls: ['../content/styles/heroes.component.css']
})


export class HeroesComponent implements OnInit {

    selectedHero: HeroItem;
    heroes: HeroItem[];

    constructor(
        private router: Router,
        private heroService: HeroService) { }

    getHeroes(): void {
        this.heroService.getHeroes().then(heroes => this.heroes = heroes);
    }

    ngOnInit(): void {
        this.getHeroes();
    }

    onSelect(hero: HeroItem): void {
        this.selectedHero = hero;
    }

    gotoDetail(): void {
        this.router.navigate(['/detail', this.selectedHero.id]);
    }


}