import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireModule } from 'angularfire2';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    AngularFireModule,
    AngularFireAuthModule
  ],
  declarations: []
})
export class CoreModule { }
