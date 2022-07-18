import { Component, ElementRef, EventEmitter, Output, ViewChild} from '@angular/core';
import { PersonaSatanica } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent  {

  @Output() personaCreada = new EventEmitter<PersonaSatanica>();

 /*  nombreInput:string='';
  apellidoInput:string=''; */

  

  

  public agregarPersona(nombreInput: HTMLInputElement, apellidoInput: HTMLInputElement){
    let persona1=new PersonaSatanica(nombreInput.value, apellidoInput.value);
    //this.personas.push(persona1);
    this.personaCreada.emit(persona1);
    
    
  }
 

}
