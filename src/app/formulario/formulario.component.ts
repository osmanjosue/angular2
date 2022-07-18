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
  @ViewChild ('nombreInput') nombreRecibido: ElementRef;
  @ViewChild ('apellidoInput') apellidoRecibido: ElementRef;

  

  

  public agregarPersona(){
    let persona1=new PersonaSatanica(this.nombreRecibido.nativeElement.value, this.apellidoRecibido.nativeElement.value);
    //this.personas.push(persona1);
    this.personaCreada.emit(persona1);
    
    
  }
 

}
