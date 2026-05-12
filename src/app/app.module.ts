import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './components/header-component/header-component.component';
import { SidebarComponentComponent } from './components/sidebar-component/sidebar-component.component';
import { NavbarComponentComponent } from './components/navbar-component/navbar-component.component';
import { HeroComponentComponent } from './components/hero-component/hero-component.component';
import { FeaturesComponentComponent } from './components/features-component/features-component.component';
import { FeaturedProductsComponentComponent } from './components/featured-products-component/featured-products-component.component';
import { FeatureComponentComponent } from './components/feature-component/feature-component.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    SidebarComponentComponent,
    NavbarComponentComponent,
    HeroComponentComponent,
    FeaturesComponentComponent,
    FeaturedProductsComponentComponent,
    FeatureComponentComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
