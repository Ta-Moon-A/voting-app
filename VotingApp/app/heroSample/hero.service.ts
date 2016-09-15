import { Injectable } from '@angular/core';
import { HeroItem } from "./heroitem";
import { HEROES } from './mock-heroes';

@Injectable()
export class HeroService {
    getHeroes(): Promise<HeroItem[]> {
        return Promise.resolve(HEROES);
    }

    getHeroesSlowly(): Promise<HeroItem[]> {
        return new Promise<HeroItem[]>(resolve =>
            setTimeout(resolve, 2000)) // delay 2 seconds
            .then(() => this.getHeroes());
    }

    getHero(id: number): Promise<HeroItem> {
        return this.getHeroes()
            .then(heroes => heroes.find(hero => hero.id === id));
    }
}