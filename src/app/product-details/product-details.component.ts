import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css',
})
export class ProductDetailsComponent implements OnInit {
navigateBack() {
throw new Error('Method not implemented.');
}
  // Define properties for the product detail
  productId: number = 0;
  productName: string = '';
  productPrice: number = 0;

  // Inject ActivatedRoute to get the route parameters
  constructor(private route: ActivatedRoute) {}

  // Implement OnInit interface
  ngOnInit() {
    // Retrieve the product details from the route parameters
    this.route.params.subscribe((params) => {
      this.productId = +params['id'];
      this.productName = params['name'];
      this.productPrice = +params['price'];
    });
  }
}
