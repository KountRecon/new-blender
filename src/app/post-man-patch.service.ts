import { Location } from './location';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from './employee';
import { Observable } from 'rxjs';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class PostManPatchService {

  // ******************************************************************

constructor(private http: HttpClient, private _angularFirestore: AngularFirestore) { }
private _url = 'https://jsonplaceholder.typicode.com/posts';
private _urlEmployees = '/assets/data/employees.json';

// Variable para guardar la posicion
// LocationDoc: AngularFirestoreDocument<Location>;
// // Variable tipo collection
// LocationCollection: AngularFirestoreCollection<Location>;
// Locations:Observable <Location[]>;

// Location: Observable <Location[]>; // para recibir una coleccion de posciones

getPosts() {
  return this.http.get<any[]>(this._url);
  }
  getEmployees(): Observable <IEmployee[]> {

  return this.http.get<IEmployee[]>(this._urlEmployees);
  }

  getLocationSingle() {
   return this._angularFirestore.doc('Locations/1');
  }

  getLocationCollection() {
  return this._angularFirestore.collection('Locations');
  }

}
