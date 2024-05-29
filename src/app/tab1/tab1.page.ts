import {Component, inject} from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonText, IonRouterLinkWithHref, IonButton, IonButtons
} from '@ionic/angular/standalone';
import { ExploreContainerComponent } from '../explore-container/explore-container.component';
import {Hero} from "../hero";
import {HeroesService} from "../heroes.service";
import {HeroesComponent} from "../heroes/heroes.component";
import {RouterLink} from "@angular/router";
import {AlertController} from "@ionic/angular";

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, ExploreContainerComponent, IonList, IonItem, IonLabel, HeroesComponent, IonItemSliding, IonItemOptions, IonItemOption, IonIcon, IonText, IonRouterLinkWithHref, RouterLink, IonButton, IonButtons],
})
export class Tab1Page {
  heroes: Hero[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit() {
    this.heroes = this.heroesService.getHeroes();
  }

  viewDetails() {

  }

  private alertController = inject(AlertController);

  async addHero() {
    const alert = await this.alertController.create({
      header: "Held hinzufügen",
      inputs: [
        {
          type: "number",
          name: "heroId",
          placeholder: "42"
        },
        {
          type: "text",
          name: "heroName",
          placeholder: "lorax"
        }
      ],
      buttons: [
        {
        text: 'Abbrechen',
          role: 'cancel'
      },
        {
          text: 'OK',
          handler: (data) => {
            console.log('OK Button wurde gedrückt.')
            console.log(data)
          }
        }
        ]
    })
    await alert.present();
  }
}
