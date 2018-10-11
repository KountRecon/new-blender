import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';
import { PostManPatchService } from '../post-man-patch.service';
import { database } from 'firebase';
import { TouchSequence } from 'selenium-webdriver';
// ********************************************************************************************** */
// Como usar firestore database
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';



interface User {
  name: string;
  email: string;
  location: any;
  id?: string;

}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})

export class PostsComponent  implements OnInit {

// *************************************************************************
// declaro variable de tipo collection firestore (donde recibo los datos)
  usersCollection: AngularFirestoreCollection <User>;

// Declaro una segunda varible de tipo Observable que va contener un array de usuarios
users: Observable <User[]> ; // para guardar toda la collecion en un array de usuarios
user: Observable <User>; // para guardar un solo usuario
newUser: string;
userDoc: AngularFirestoreDocument <User>;

public employees = [];
public posts = [];
private _url: '/assets/data/employees.json';

  constructor(private _postmanPatchService: PostManPatchService, private _angularFirestore: AngularFirestore ) { }
  // como subscirbirse a un Observable
  // *****************************************

  // onInit is a Life-cyle hook
  ngOnInit(): void {
   this._postmanPatchService.getEmployees()
   .subscribe(data => this.employees = data);

  //  this._postmanPatchService.getPosts()
  //  .subscribe(data => this.posts = data).toString();

   function stringify(x) {
     console.log(this.posts.toString());
   }
   // reference to data*********** Fire Store
    // Para manipular un usuario en concreto
    // this.userDoc = this._angularFirestore.doc('users/1');
    // this.user = this.userDoc.valueChanges();

    // funciones para mostrar la colletion  de usuario
    this.usersCollection = this._angularFirestore.collection('users');
    this.users = this.usersCollection.valueChanges();
    // this.usersCollection = this._angularFirestore.collection('users', ref => {
    //   return ref.orderBy('name', 'asc');
    // });

    // this.snapshot = this.usersCollection.snapshotChanges()
    //   .map(arr => {
    //     console.log(arr)
    //     arr.map(snap => snap.payload.doc.data());
    //   });
  }
    updateUser() {
      this.userDoc.update({name: this.newUser});
  // *****************************************
    }

}
