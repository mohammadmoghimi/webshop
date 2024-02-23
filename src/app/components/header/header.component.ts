import { Component, Input } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import { CommonModule } from '@angular/common';
import { Cart, CartItem } from '../../models/cart.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,
    MatBadgeModule , MatMenuModule , MatMenuTrigger , CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

    constructor(private cartService : CartService){

    }
  @Input()
  get cart(): Cart {
    return this._cart ;
  }

  set cart(cart: Cart) {
    this._cart = cart ;

    this.itemsQuantity = cart.items.map((item) => item.quantity).reduce((prev, current) => prev+ current, 0)
  }
  private _cart : Cart = {items: []}
  itemsQuantity = 0 ;

  getTotal(items: Array<CartItem>):number {
    return items.map((item) => item.price * item.quantity)
    .reduce((prev , current) => prev + current , 0)
  }
  onClearCart () {
    this.cartService.clearCart()
  }
}
