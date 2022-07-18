import { Component, Input, OnInit } from '@angular/core';
import { PersonaSatanica } from '../persona.model';

@Component({
  selector: 'app-persona',
  templateUrl: './persona.component.html',
  styleUrls: ['./persona.component.css']
})
export class PersonaComponent implements OnInit {

  @Input() persona:PersonaSatanica;
  @Input() indice:number;
  

  constructor() { }

  ngOnInit(): void {
  }

}
