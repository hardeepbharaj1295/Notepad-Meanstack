import { NgModule } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { NoteCenterComponent } from './note-center/note-center.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'notes', component: NoteCenterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
