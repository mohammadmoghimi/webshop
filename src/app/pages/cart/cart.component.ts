import { Component, OnInit } from '@angular/core';
import { Cart, CartItem } from '../../models/cart.model';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

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

  ngOnInit(): void {
  this.dataSource = this.cart.items ; 
}

getTotal(items: Array<CartItem>):number {
  return items.map((item) => item.price * item.quantity)
  .reduce((prev , current) => prev + current , 0)
}
}  
