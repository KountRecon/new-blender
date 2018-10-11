import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { GeoPoint } from '@firebase/firestore-types';
import {tap, first } from 'rxjs/operators';
import * as firebase from 'firebase';


// interface User {
//  name: string;
//  email: string;
//  gps: GeoPoint;
//   pos: {
//   // tslint:disable-next-line:no-unused-expression
//   geohash: string;
//   geopoint: GeoPoint;
// };
// }

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup;
  constructor( private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.userForm = this._formBuilder.group({

        email: ['', Validators.required],
        message: ['', Validators.required],
      });
    }
  // async submitHandler () {

  //   // getting current value of the form
  // //  const gps = new firebase.firestore.GeoPoint(this.myForm.latitude, this.myForm.longitude);
  //   const formValue = this.myForm.value;
  //   // formValue.pos.geohash = this.myForm.geohash;
  //   // formValue.gps = gps;
  //   // formValue.pos.geopoint = gps;
  //   // catching all the posible errors
  //   try {
  //    await this._afs.collection('users').add(formValue);
  //    // await this._afs.collection('dogs').add(this._auth.user as user);
  //   } catch (err) { console.log(err); }


  // }

}
