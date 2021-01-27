import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InitalComponent } from './pages/inital/inital.component';
import { ListComponent } from './pages/list/list.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  {
    path: "",
    component: InitalComponent
  },
  {
    path: "register",
    component: RegisterComponent,
  },
  {
    path: "list/:key",
    component: ListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
