import { Component } from '@angular/core';

const ELEMENT_DATA = [
  {id: 1, name: 'Luca', Cognome: 'Francesconi', Email: 'luca.francesconi@gmail.com', Eta: 28, Professione: 'dev', Citta: 'Roma', },
  {id: 2, name: 'Luca', Cognome: 'Francesconi', Email: 'luca.francesconi@gmail.com', Eta: 28, Professione: 'dev', Citta: 'Roma', },
  {id: 3, name: 'Luca', Cognome: 'Francesconi', Email: 'luca.francesconi@gmail.com', Eta: 28, Professione: 'dev', Citta: 'Roma', },
  {id: 4, name: 'Luca', Cognome: 'Francesconi', Email: 'luca.francesconi@gmail.com', Eta: 28, Professione: 'dev', Citta: 'Roma', },
  {id: 5, name: 'Luca', Cognome: 'Francesconi', Email: 'luca.francesconi@gmail.com', Eta: 28, Professione: 'dev', Citta: 'Roma', },
  {id: 6, name: 'Luca', Cognome: 'Francesconi', Email: 'luca.francesconi@gmail.com', Eta: 28, Professione: 'dev', Citta: 'Roma', },
  {id: 7, name: 'Luca', Cognome: 'Francesconi', Email: 'luca.francesconi@gmail.com', Eta: 28, Professione: 'dev', Citta: 'Roma', },
  {id: 8, name: 'Luca', Cognome: 'Francesconi', Email: 'luca.francesconi@gmail.com', Eta: 28, Professione: 'dev', Citta: 'Roma', },
  {id: 9, name: 'Luca', Cognome: 'Francesconi', Email: 'luca.francesconi@gmail.com', Eta: 28, Professione: 'dev', Citta: 'Roma', },
];

@Component({
  selector: 'app-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.scss']
})

export class UsersTableComponent {

  displayedColumns: string[] = ['id', 'name', 'cognome', 'email','eta','professione', 'citta', 'Azioni'];
  dataSource = ELEMENT_DATA;

  showUser(element: any){
    console.log(element);
  }
}
