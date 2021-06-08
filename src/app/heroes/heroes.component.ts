import { Component, OnInit } from '@angular/core';
//Este import regresa 2 subcarpetas atras ../ donde está app
//y sirve para importar la clase creada en el archivo hero.ts
//El Hero es el que se definió abajo en el export
import {Hero} from '../hero';

import {HEROES} from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  hero : Hero = {
    id : 1,
    name : 'Ironman',
    color: 'rojo'
  };

  heroes = HEROES;

  constructor() { }

  ngOnInit() {
  }

}
