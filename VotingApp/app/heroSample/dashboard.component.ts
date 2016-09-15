import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroItem } from './heroitem';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    template: ` <h3>Top Heroes</h3>
                <div *ngFor="let hero of heroes" (click)="gotoDetail(hero)" class="col-l3">
                    <div class="module hero">
                      <h4>{{hero.name}}</h4>
                    </div>
                 </div>`,
    styleUrls: ['../content/styles/dashboard.component.css'],
    providers: [HeroService]
})
export class DashboardComponent implements OnInit {

    public heroes: HeroItem[] = [];

    constructor(
        private router: Router,
        private heroService: HeroService) {
    }

    ngOnInit(): void {
        debugger;
        this.heroService.getHeroes().then(hrs => {
            this.heroes = hrs.slice(1, 5);
        });
        console.log(this.heroes.length);
    }

    gotoDetail(hero: HeroItem): void {
        let link = ['/detail', hero.id];
        this.router.navigate(link);
    }


}