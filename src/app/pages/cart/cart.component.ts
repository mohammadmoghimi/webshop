import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [MatCardModule ,MatIconModule , CommonModule , MatTableModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{

  cart : Cart = {items:[
    {
      product: 'https://via.placeholder.com/150' ,
      name : 'snickers' ,
      price: 150 ,
      quantity : 1 ,
      id : 1
    } ,
    {
      product: 'https://via.placeholder.com/150' ,
      name : 'snickers' ,
      price: 150 ,
      quantity : 3 ,
      id : 2
    }
  ]}

  dataSource : Array<CartItem> = []

  displayColumns : Array<string> = [
    'product' ,
    'name' ,
    'price' ,
    'quantity' ,
    'total' ,
    'action'
  ]

  constructor(private cartService : CartService) {
  }

  ngOnInit(): void {
      this.dataSource = this.cart.items ;
      this.cartService.cart.subscribe((_cart: Cart) => {
        this.cart = _cart ;
        this.dataSource = this.cart.items ;
      })
  }
getTotal(items: Array<CartItem>):number {
  return this.cartService.getTotal(items)
}

  onClearCart():void {
    this.cartService.clearCart()
  }
  onRemoveFromCart(item:CartItem):void{
    this.cartService.removeFromCart(item)
  }
  onAddQuantity(item:CartItem):void {
    this.cartService.addToCart(item)
  }
  onRemoveQuantity(item:CartItem):void {
    this.cartService.removeQuantity(item)
  }
}  
