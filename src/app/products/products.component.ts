import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../core/service/product/products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  products: Product[] = [];


  constructor(
    private producsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  clickProduct(id: number) {
    console.log('product');
    console.log(id)
  }

  fetchProducts() {
    this.producsService.getAllProducts()
    .subscribe(products => {
      this.products = products
    })
  }

}
