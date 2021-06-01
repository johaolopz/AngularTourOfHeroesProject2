import { Component, OnInit } from '@angular/core';
//Este import regresa 2 subcarpetas atras ../ donde está app
//y sirve para importar la clase creada en el archivo hero.ts
//El Hero es el que se definió abajo en el export
import {Hero} from '../hero';

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
  constructor() { }

  ngOnInit() {
  }

}
