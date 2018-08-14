import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  pistas:any[];
  constructor(db: AngularFireDatabase){
   
  db.list('/tracks/pistas/pista/').valueChanges().subscribe(pistas=>{
    this.pistas = pistas;
    //tambien muestro por consola mensaje
    console.log(this.pistas);
    console.log('valor cambia');})
  }
  title = ' Wanted !';
}
