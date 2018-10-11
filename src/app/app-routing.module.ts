import { HammerCardComponent } from './hammer-card/hammer-card.component';
import { FiredogFormComponent } from './firedog-form/firedog-form.component';
import { DbfeedComponent } from './dbfeed/dbfeed.component';
import { AdminGuard } from './admin.guard';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { UserFormComponent } from './user-form/user-form.component';
import { DogFormComponent } from './dog-form/dog-form.component';



const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'posts',
    component: PostsComponent,
   // canActivate: [AdminGuard]
  },
  {
    path: 'dogmap',
    component: GoogleMapComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'userForm',
    component: UserFormComponent,
  },
  {
    path: 'dogForm',
    component: FiredogFormComponent,
  },
  {
    path: 'dbfeed',
    component: DbfeedComponent,
  },
  {
    path: 'cards',
    component: HammerCardComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
