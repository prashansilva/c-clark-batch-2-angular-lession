import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {DealsComponent} from "./components/deals/deals.component";
import {NewArrivalsComponent} from "./components/new-arrivals/new-arrivals.component";
import {BestSellersComponent} from "./components/best-sellers/best-sellers.component";
import {ContactUsComponent} from "./components/contact-us/contact-us.component";

const routes: Routes = [
  { path :'' , component : DashboardComponent},
  { path :'shop' , loadChildren: () => import('./modules/shop/shop.module').then(m => m.ShopModule) },
  { path :'deals' , loadChildren: () => import('./modules/deals/deals.module').then(m => m.DealsModule)},
  { path: 'setups' , loadChildren: () => import('./modules/setup/setup.module').then(m => m.SetupModule)},
  { path: 'rxjs', loadChildren: () => import('./modules/rxjs/rxjs.module').then(m => m.RxjsModule)},
  { path :'new-arrivals' , component : NewArrivalsComponent},
  { path :'best-sellers' , component : BestSellersComponent},
  { path :'contact-us' , component : ContactUsComponent},
  { path :'**' , redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
