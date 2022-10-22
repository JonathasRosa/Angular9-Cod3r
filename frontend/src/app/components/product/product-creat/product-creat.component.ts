import { ProductService } from '../product.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-creat',
  templateUrl: './product-creat.component.html',
  styleUrls: ['./product-creat.component.css']
})
export class ProductCreatComponent implements OnInit {

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
   
  }

  createProduct(): void {
     this.productService.showMessage('Produtocriado!')
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }
}
