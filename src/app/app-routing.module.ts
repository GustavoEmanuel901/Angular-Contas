import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitalComponent } from './pages/inital/inital.component';

const routes: Routes = [
  {
    path: "",
    component: InitalComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
