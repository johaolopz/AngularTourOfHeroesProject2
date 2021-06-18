import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';

//simulación de obtención de datos del servidor con RxJS
import{Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  
  //of(HEROES) devuelve una Observable<Hero[]>
  getHeroes():Observable<Hero[]> {
    return of (HEROES);
  }


  constructor() { }
}
