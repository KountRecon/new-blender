import { AgmCoreModule } from '@agm/core';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFirestoreModule} from 'angularfire2/firestore';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostManPatchService } from './post-man-patch.service';
import { FormsModule } from '@angular/forms';
import { GoogleMapComponent } from './google-map/google-map.component';

// importo enviromen para que funcione la variable environment
export const firebaseconfig = environment.firebase;
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GoogleMapComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    FormsModule
  ],
  providers: [PostManPatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
