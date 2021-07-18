import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

//simulación de obtención de datos del servidor con RxJS
import{Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  //of(HEROES) devuelve una Observable<Hero[]>
  getHeroes():Observable<Hero[]> {

    // TODO: Envía el mensaje luego del fetching the heroes
    this.messageService.add('HeroService: fetched heroes');

    return of (HEROES);
  }

    getHero(id: number): Observable<Hero> {
      // TODO: send the message _after_ fetching the hero
      this.messageService.add(`HeroService: fetched hero id=${id}`);
      return of(HEROES.find(hero => hero.id === id));
    }


  constructor(private messageService: MessageService) { }
}
