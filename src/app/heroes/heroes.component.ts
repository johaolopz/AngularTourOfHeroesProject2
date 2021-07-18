import { Component, OnInit } from '@angular/core';
//Este import regresa 2 subcarpetas atras ../ donde está app
//y sirve para importar la clase creada en el archivo hero.ts
//El Hero es el que se definió abajo en el export
import {Hero} from '../hero';

//Se elimina esta línea xq ahora se inyectará a través de un "service"
//import {HEROES} from '../mock-heroes';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  //ESTE CÓDIGO MURIÓ +++RIP+++
  //selectedHero: Hero;
  //onSelect(hero: Hero): void {
  //  this.selectedHero = hero;
  //  }    

  //se actualiza esta línea
  //heroes = HEROES;
  heroes : Hero[];

  //Aquí se inyecta con el constructor y parámetro privado
  constructor(private heroService: HeroService) { }

  //Uso el this.heroes de acuerdo al alias definido arriba
  getHeroes(): void {

    //Con esta subscripción se devolverá un Hero[] Observable (Emulando servidor de datos)
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  //De esta manera se llama la función getHeroes del HeroService
  ngOnInit() {
    this.getHeroes();
  }

}
