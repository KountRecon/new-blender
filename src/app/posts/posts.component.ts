import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent {

private _url: string ="/assets/data/employees.json";

  constructor(private http:HttpClient) { 
  //  http.get('https://jsonplaceholder.typicode.com/posts')
  //   .subscribe(response =>{
  //     console.log('sdfsf');
  //   });
  }

  getPosts(){
    return this.http.get<IEmployee[]>(this._url);

  }
}
