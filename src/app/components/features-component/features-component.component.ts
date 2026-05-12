import { Component } from '@angular/core';
import {Feature} from "../../model/feature";

@Component({
  selector: 'app-features-component',
  templateUrl: './features-component.component.html',
  styleUrls: ['./features-component.component.scss']
})
export class FeaturesComponentComponent {

  public features: Feature[] = [
    new Feature('fa-truck', 'Free Shipping', 'On all orders over $50'),
    new Feature('fa-gift', 'Free Gift', 'Get 10% off on your first order'),
    new Feature('fa-sync', '90 Days Return', 'Return within 90 days'),
    new Feature('fa-headset', '24/7 Support', 'Available 24/7 to help you'),
  ]

  public name = 'Shopy';

  constructor() { }

  onButtonClick() {
    this.name = 'Shopy' + Math.random();
  }
}
