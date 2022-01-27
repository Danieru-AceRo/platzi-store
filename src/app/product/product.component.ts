import { Component, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnInit, DoCheck, OnDestroy  } from "@angular/core";
import { CartService } from "../core/service/cart.service";
import { Product } from "../product.model";

@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnChanges, OnInit, DoCheck, OnDestroy {
   @Input() product: Product;
   @Output() productClicked: EventEmitter<any> = new EventEmitter();

   today = new Date()

   constructor(
       private cartService: CartService
   ) {
       console.log('1. constructor')
   }

   ngOnChanges(changes: SimpleChanges): void {
       //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
       //Add '${implements OnChanges}' to the class.
       console.log('2. ngOnChanges');
       console.log(changes)  
   }

   ngOnInit(): void {
       //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
       //Add 'implements OnInit' to the class.
       console.log('3. ngOnInit')
   }

   ngDoCheck(): void {
       //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
       //Add 'implements DoCheck' to the class.
       console.log('4. ngDoCheck')
   }

   ngOnDestroy(): void {
       //Called once, before the instance is destroyed.
       //Add 'implements OnDestroy' to the class.
       console.log('5. ngOnDestroy')
   }

   addCart() {
       console.log('añadir a carrito');
       this.cartService.addCart(this.product)
    //    this.productClicked.emit(this.product.id)
   }
}