import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  product = {
    label: '',
    quantity: 0
  }

  products = [
    {
      label: 'Sumsung',
      quantity: 200
    },
    {
      label: 'Huawi',
      quantity: 150
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  addProduct() {
    this.products = [this.product, ...this.products]
    this.reset()
  }

  reset() {
    this.product = {
      label: '',
      quantity: 0
    }
  }
 

}
