import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Product } from 'src/app/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  constructor(
    private http: HttpClient
  ) { }

  getAllProducts() {
    return this.http.get<Product[]>('https://platzi-store.herokuapp.com/products');
  }

  getProduct(id: string) {
    return this.http.get<Product>(`https://platzi-store.herokuapp.com/products/${id}`);
  }
  
  creteProduct(product: Product) {
    return this.http.post(`https://platzi-store.herokuapp.com/products`, product);
  }
  updateProduct(id:string, chages: Partial<Product>) {
    return this.http.put(`https://platzi-store.herokuapp.com/products/${id}`, chages);
  }
  deleteProduct(id: string) {
    return this.http.delete(`https://platzi-store.herokuapp.com/products/${id}`);
  }
}
