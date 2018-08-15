import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '/home/raudo/Documents/providence/src/app/employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostManPatchService {
 

  constructor(private http:HttpClient) { }

private _url = 'https://jsonplaceholder.typicode.com/posts';
private _urlEmployees = '/assets/data/employees.json';
  
getPosts(){
    return this.http.get<any[]>(this._url);

  }
  getEmployees(): Observable <IEmployee[]>{

    return this.http.get<IEmployee[]>(this._urlEmployees);
  }

}
