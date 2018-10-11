import { switchMap } from 'rxjs/operators';
import { Location } from './../location';
import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { PostManPatchService } from '../post-man-patch.service';
import { Observable, BehaviorSubject } from 'rxjs';
import * as geofirex from 'geofirex';
import * as firebase from 'firebase/app';
import { updateClassProp } from '@angular/core/src/render3/styling';

// import 'rxjs/add/operator/map';

interface User {
  name: string;
  email: string;
  pos: object;
  id?: string;
}


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  // inicilizo Geofire
  geo = geofirex.init(firebase);
  // point es la variable obsevable para los puntos
  points: Observable<any>;
  radius  = new BehaviorSubject(0.5);

  lat: number;
  lng: number;
  LocationDoc: AngularFirestoreDocument<any>;

  LocationCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  user: Observable<User>;
  center: any;


  constructor(private _postmanPatchService: PostManPatchService,
              private _angularFirestore: AngularFirestore) { }

  ngOnInit() {
   // this.getUserLocation();

    //  this.usersCollection = this._angularFirestore.collection('users');
    //  this.users = this.usersCollection.valueChanges();

    // configurando conexion a firestore con GeoFire
    const collection = this.geo.collection('users');
   this.center = this.geo.point(40.49149913433162, -3.872585248147857);
    const radius = 20;
    const field = 'pos';
    // me subscribo al  Hot obserable que me devuelve Geofire
  this.points = collection.within(this.center, radius, field);
    this.points.subscribe();
    // this.points = this.radius.pipe(
    //   switchMap(r => {
    //     return this.geo.collection('users').within(center, r, field);
    //   })
    // );



    // this.LocationCollection = this._angularFirestore.collection('users'); // referencia
    // this.users = this.LocationCollection.valueChanges(); // Observable de datos Locations

     this.getLocations();
  }

  update (v) {
  this.radius.next(v);

  }

  ConvertString(value) {
    return parseFloat(value);
  }

  private getUserLocation() {
    // localizamos al usuario
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(position => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;

      });
    }
  }



  getLocations() {
    console.log(this.LocationCollection);
  }

  // funcion para que no se vuelvan a pintar lo marcadores que ya estan en la zona
  trackByFn(_, doc) {
    return doc.id;
  }


  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 99) {
      return Math.round(value / 1000) + 'BOoom muy lejos';
    }

    return value + 'km';
  }

}
