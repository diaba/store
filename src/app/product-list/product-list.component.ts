import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css',
})
export class ProductListComponent implements OnInit {
  navigateToProductDetail(arg0: any) {
    throw new Error('Method not implemented.');
  }
  // Define the list of products
  products: any[] = [
    {
      id: 1,
      name: 'Product 1',
      price: 19.99,
      img: 'https://images.footlocker.com/is/image/EBFL2/IE8467_a1?wid=520&hei=520&fmt=png-alpha',
    },
    {
      id: 2,
      name: 'Product 2',
      price: 29.99,
      img: 'https://images.footlocker.com/is/image/EBFL2/574FBS_a1?wid=2000&hei=2000&fmt=png-alpha',
    },
    {
      id: 3,
      name: 'Product 3',
      price: 39.99,
      img: 'https://images.footlocker.com/is/image/EBFL2/M2362001_a1?wid=2000&hei=2000&fmt=png-alpha',
    },
    // Add more products as needed
  ];

  // Implement OnInit interface
  ngOnInit() {
    // Initialization logic, if needed
  }
}
