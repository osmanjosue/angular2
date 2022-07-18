import { Component } from '@angular/core';
import { PersonaSatanica } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de Personas';
  personas: PersonaSatanica[]=[new PersonaSatanica('juan', 'perez'), new PersonaSatanica('Laura', 'Juarez'), new PersonaSatanica('TUCU', 'LOSUCIO')];
  
  personaAgregada(persona: PersonaSatanica){
    this.personas.push(persona);

  }
}
