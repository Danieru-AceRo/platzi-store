import { Component, OnInit } from '@angular/core';

import { ProductsService } from 'src/app/core/service/product/products.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products = [];
  displayedColumns: string[] = ['id', 'title', 'price', 'action'];

  constructor(
    private productsService:ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts();
  }

  fetchProducts() {
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products
    })
  }
  deleteProduct(id: string) {
    this.productsService.deleteProduct(id)
    .subscribe(rta => {
      console.log(rta)
    })
  }
}
