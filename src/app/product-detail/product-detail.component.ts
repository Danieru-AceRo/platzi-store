import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductsService } from '../core/service/product/products.service';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor( 
    private route: ActivatedRoute,
    private productesService: ProductsService
    ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const id = params.id;
      this.fetchProduct(id)
      // this.product = this.productesService.getProduct(id);
    })
  }

  fetchProduct(id: string) {
    this.productesService.getProduct(id)
    .subscribe(product => {
      this.product = product;
    })
  }

  createProduct() {
    const newProduct: Product = {
      id: '222',
      title: 'Nuevo Desde Angular',
      image: 'assets/images/pin.png',
      price: 3000,
      description: 'qwertyuiooopasdfghjklzxcvbnm,.-'
    };
    this.productesService.creteProduct(newProduct)
    .subscribe(product => {
      console.log(product)
    });
  }

  updateProduct() {
    const updateProduct:Partial<Product> = {
      price: 1213454,
      description: 'un gran producto actualizado.'
    };
    this.productesService.updateProduct('2', updateProduct)
    .subscribe(product => {
      console.log(product)
    });
  }
  deleteProduct() {
    this.productesService.deleteProduct('2')
    .subscribe(rta => {
      console.log(rta)
    });
  }
}
