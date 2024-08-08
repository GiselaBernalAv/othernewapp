import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  productName= " A book";
  isDisabled = true;
  products = ['A book', 'A Tree'];

  constructor() {
    setTimeout(() => {
      this.productName = "A tree";
      this.isDisabled= false;
    }, 3000)
  }
  onAddProduct() {
    this.products.push(this.productName)
  }
}
