import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  colores: any[];

  constructor(db: AngularFireDatabase) {
  db.list('/pistas').valueChanges().subscribe(colores => {
    this.colores = colores;
    // tambien muestro por consola mensaje
    console.log(this.colores);
    console.log('valor cambia'); });
  }

  title = ' Wanted !';
  myHero = 'Dada Dat Field';

  getTrabajadores() {

  }
}
