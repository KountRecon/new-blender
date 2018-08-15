import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmployee } from '../employee';
import { Observable } from 'rxjs';
import { PostManPatchService } from '../post-man-patch.service';
import { database } from 'firebase';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent  implements OnInit {

  public employees = [];
  public posts = [];
 

private _url: string ="/assets/data/employees.json";

  constructor(private _postmanPatchService: PostManPatchService) { }
  // como subscirbirse a un Observable
  // *****************************************
  ngOnInit(): void {
  
   this._postmanPatchService.getEmployees()
   .subscribe(data=>this.employees = data);

   this._postmanPatchService.getPosts()
   .subscribe(data=>this.posts = data).toString();

   function stringify(x){
     console.log(this.posts.toString());
   }
  }
// *****************************************

}