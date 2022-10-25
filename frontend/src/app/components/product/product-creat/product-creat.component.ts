import { Product } from './../product.model' 
import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NonNullAssert } from '@angular/compiler';
import { NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {

  product: Product = {
    name: '',
    price: null,
    id: 0
  }

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
   
  }
 
  createProduct(): void {
    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage('Produto criado!')  
      this.router.navigate(['/products'])
    })
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
