import { StoreService } from './../../services/store.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ProductsHeaderComponent } from './components/products-header/products-header.component';
import { FiltersComponent } from "./components/filters/filters.component";
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductBoxComponent } from './components/product-box/product-box.component';
import { CartService } from '../../services/cart.service';
import { Product } from '../../models/product.model';
import { Subscription } from 'rxjs';

  const ROWS_HEIGHT : { [id:number] : number }= { 1 : 400 , 3 : 335, 4 : 350} 
@Component({
    selector: 'app-home',
    standalone: true,
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    imports: [ProductBoxComponent,MatSidenavModule, ProductsHeaderComponent, FiltersComponent, MatGridListModule]
})
export class HomeComponent implements OnInit , OnDestroy{

    constructor (private cartService : CartService , private storeService:StoreService) {

    }

    ngOnInit(): void {
        this.getProducts() ;
    }

    getProducts() :void {
      this.productsSubscription = this.storeService.getAllproducts(this.count , this.sort).subscribe((_products) => {
        this.products = _products ;
      })
    }   
 
 
    products:Array<Product> | undefined ;
    sort ='desc' ;
    count = '12' ;
    productsSubscription:Subscription | undefined ;
  cols = 3 ;
  rowHeight = ROWS_HEIGHT [ this.cols ]
  category : string | undefined
  onColumnsCountChange(colsNum : number):void {
    this.cols = colsNum ;
    this.rowHeight = ROWS_HEIGHT [ this.cols ]

  }

  onShowCategory(newCategory:string):void {
    this.category = newCategory ;
  }


  onAddToCart(product : Product):void {
    this.cartService.addToCart({
      product : product.image ,
      name : product.title ,
      price : product.price ,
      quantity : 1 ,
      id : product.id
    })
  }


  ngOnDestroy(): void {
      if(this.productsSubscription) {
        this.productsSubscription.unsubscribe()
      }
  }
}
