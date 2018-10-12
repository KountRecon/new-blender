import { AngularFireStorage } from 'angularfire2/storage';
import { CoreModule } from './core/core.module';
import { AgmCoreModule } from '@agm/core';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
import { PostManPatchService } from './post-man-patch.service';
import { FormsModule } from '@angular/forms';
import { GoogleMapComponent } from './google-map/google-map.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRadioModule } from '@angular/material/radio';
import { MatSliderModule } from '@angular/material/slider';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { LayoutModule } from '@angular/cdk/layout';

import { UserFormComponent } from './user-form/user-form.component';
import { DogFormComponent } from './dog-form/dog-form.component';
import { DbfeedComponent } from './dbfeed/dbfeed.component';
import { FiredogFormComponent } from './firedog-form/firedog-form.component';
import { HammerCardComponent } from './hammer-card/hammer-card.component';
import { HammertimeDirective } from './hammertime.directive';
// import { MyHammerConfig } from './my-hammer.config';
// importo enviromen para que funcione la variable environment
export const firebaseconfig = environment.firebase;
@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    GoogleMapComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    UserFormComponent,
    DogFormComponent,
    DbfeedComponent,
    FiredogFormComponent,
    HammerCardComponent,
    HammertimeDirective,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreModule,
    MatRadioModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSliderModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    LayoutModule,
    AngularFireModule.initializeApp(firebaseconfig),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    AgmCoreModule.forRoot({
      apiKey: environment.googleMapsKey
    }),
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatCheckboxModule,
    MatChipsModule,
    MatSliderModule,
    MatRadioModule,
    ReactiveFormsModule,
    MatCardModule
  ],
  providers: [PostManPatchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
