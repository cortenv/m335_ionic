import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroesService} from "../heroes.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss'],
  standalone: true
})
export class HeroesComponent  implements OnInit {
  @Input() heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }
}
