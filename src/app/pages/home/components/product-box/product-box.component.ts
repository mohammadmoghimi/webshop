import { Component, EventEmitter, Input, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import { CommonModule } from '@angular/common';

import { Product } from '../../../../models/product.model'

@Component({
  selector: 'app-product-box',
  standalone: true,
  imports: [MatCardModule , MatIconModule ,
     MatBadgeModule , MatMenuModule , CommonModule],
  templateUrl: './product-box.component.html',
  styleUrl: './product-box.component.scss'
})
export class ProductBoxComponent {
  @Input() fullWidthMode = false ;

  @Output() addToCart = new EventEmitter()
  @Input() product : Product | undefined ;

  onAddToCart():void {
    this.addToCart.emit(this.product)
  }

}
