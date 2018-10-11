import { async } from '@angular/core/testing';
import { AngularFirestore } from 'angularfire2/firestore';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { tap, first } from 'rxjs/operators';

@Component({
  selector: 'app-dog-form',
  templateUrl: './dog-form.component.html',
  styleUrls: ['./dog-form.component.css']
})
export class DogFormComponent implements OnInit {
  // variable pra guardar el form
  woofForm: FormGroup;
  myform: any;

  // estado del formulario
  loading = false;
  success = false;


  constructor(private _formBuilder: FormBuilder,
              private _angularfirestore: AngularFirestore) { }

  ngOnInit() {

    this.woofForm = this._formBuilder.group({

      email: ['', Validators.required],
      message: ['', Validators.required],
    });
  }

  // metodos de la clase***********************************************
  async submitHandler() {
    this.loading = true;

    // getting current value of the form
    const formValue = this.woofForm.value;

    // catching all the posible errors
    try {
      await this._angularfirestore.collection('dogForm').add(formValue);
    } catch (err) { console.log(err); }

    this.loading = false;
  }

}
