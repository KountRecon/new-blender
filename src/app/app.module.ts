import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import{AngularFireModule}from 'angularfire2';
import{AngularFireDatabaseModule}from 'angularfire2/database';
import { environment } from 'src/environments/environment';
import { PostsComponent } from './posts/posts.component';
import { HttpClientModule } from '@angular/common/http';
//importo enviromen para que funcione la variable environment

@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
