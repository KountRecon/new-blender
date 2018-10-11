import { AngularFirestore } from 'angularfire2/firestore';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-firedog-form',
  templateUrl: './firedog-form.component.html',
  styleUrls: ['./firedog-form.component.css']
})
export class FiredogFormComponent implements OnInit {

    // variable pra guardaar el form
    myForm: FormGroup;

    // estado del formulario
    loading = false;
    success = false;
    userid: Observable <any>;


    // variable para guardar las razas
    public razas = [
      { name: 'affenpisncher' },
      { name: 'african' },
      { name: 'affenpins' },
      { name: 'african' },
      { name: 'airedale' },
      { name: 'akita' },
      { name: 'appenzell' },
      { name: 'basenji' },
      { name: 'beagle' },
      { name: 'bluetick' },
      { name: 'borzoi' },
      { name: 'bouvier' },
      { name: 'boxer' },
      { name: 'brabancon' },
      { name: 'briard' },
      { name: 'bulldog' }
    ];

  constructor( private _formBuilder: FormBuilder,
    private _afs: AngularFirestore) { }

  ngOnInit() {
    this.myForm = this._formBuilder.group({
      genero: ['', [
        Validators.required,
        Validators.pattern('[m|h]')
      ]],
      age: [null, [
        Validators.required,
        Validators.minLength(1),
        Validators.min(0),
        Validators.max(12)
      ]],
      agree: [false, [Validators.requiredTrue]],
      descripcion: ['', [Validators.required]],
      raza: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      uid: ['', ]
    });
  }

  // submit
  async submitHandler() {
    this.loading = true;
// this.userid = this._auth;

// me susbcribo a la respuesta del observable
this.userid.subscribe(res => console.log(res));
    // getting current value of the form
    const formValue = this.myForm.value;
    // catching all the posible errors
    try {

     await this._afs.collection('dogs').add(formValue);
     // await this._afs.collection('dogs').add(this._auth.user as user);
    } catch (err) { console.log(err); }

    this.loading = false;
  }
  get uid() {
    return this.myForm.get('uid');
  }

  get nombre() {
    return this.myForm.get('nombre');
  }
  get raza() {
    return this.myForm.get('raza.name');
  }
  get descripcion() {
    return this.myForm.get('descripcion');
  }

  get genero() {
    return this.myForm.get('genero');
  }

  get age() {
    return this.myForm.get('age');
  }

  get agree() {
    return this.myForm.get('agree');
  }

}
