import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicComponent} from "./components/basic/basic.component";

const routes: Routes = [
  { path: '', component: BasicComponent },
  { path :'**' , redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
