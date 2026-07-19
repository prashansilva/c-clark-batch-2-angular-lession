import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BasicComponent} from "./components/basic/basic.component";
import {StreamsComponent} from "./component/streams/streams.component";

const routes: Routes = [
  { path: '', component: BasicComponent },
  { path: 'stream', component: StreamsComponent },
  { path :'**' , redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RxjsRoutingModule { }
