import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

@Injectable({
  providedIn: 'root',
})
export class HeroesService {
  private heroes = HEROES;

  getHeroes(): Hero[] {
    return this.heroes;
  }
}
