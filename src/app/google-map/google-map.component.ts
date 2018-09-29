import { AngularFirestore, AngularFirestoreDocument, AngularFirestoreCollection} from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { PostManPatchService } from '../post-man-patch.service';
import { Observable } from 'rxjs';
// import 'rxjs/add/operator/map';

interface User {
  name: string;
  email: string;
  location: any;
  id?: string;

}


@Component({
  selector: 'app-google-map',
  templateUrl: './google-map.component.html',
  styleUrls: ['./google-map.component.css']
})
export class GoogleMapComponent implements OnInit {

  lat: number;
  lng: number;
  LocationDoc: AngularFirestoreDocument<any>;
  // Vuelve como un observable array
  Locations: Observable<User[]>;
  LocationCollection: AngularFirestoreCollection<User>;
  userDoc: AngularFirestoreDocument<User>;
  user: Observable <User>;


  constructor(private _postmanPatchService: PostManPatchService, private _angularFirestore: AngularFirestore) { }

 ngOnInit() {
 this.getUserLocation();

  this.userDoc = this._angularFirestore.doc('users'); // referencia
  this.Locations = this.LocationCollection.valueChanges(); // Observable de datos Locations
  this.getLocations();
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

    // getLocation() {
    // this.LocationDoc = this._postmanPatchService.getLocSingle();
    // console.log(LocationDoc);

    // }

    getLocations() {
      console.log(this.LocationCollection);
    }

}
