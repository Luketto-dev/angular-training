import { Component, OnInit } from '@angular/core';
import { Persona } from './classes/persona';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'angular-training';
  persona1 : Persona = new Persona('Luca', 'Francesconi', new Date('1995-01-13T23:59:59'));
  constructor() {
    
  }

  ngOnInit() {
    this.persona1.calcolataEta(this.persona1);
  }

}
