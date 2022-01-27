import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FizzbuzzComponent } from './components/fizzbuzz/fizzbuzz.component';
import { HomeComponent } from './components/home/home.component';
import { UxExampleComponent } from './components/ux-example/ux-example.component';

const routes: Routes = [
  {
    path: "",
    component: HomeComponent
  },
  {
    path: "uxexample",
    component: UxExampleComponent
  },
  {
    path: "fizzbuzz",
    component: FizzbuzzComponent
  },
  {
    path: "**",
    redirectTo: ""
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
