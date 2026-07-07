import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {SetupComponent} from "./components/setup/setup.component";
import {ReactiveSetupComponent} from "./components/reactive-setup/reactive-setup.component";

const routes: Routes = [
  { path: '', component: SetupComponent },
  { path: 'reactive', component: ReactiveSetupComponent },
  { path :'**' , redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SetupRoutingModule { }
