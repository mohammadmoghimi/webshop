import { Component, EventEmitter, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatMenuModule} from '@angular/material/menu';
import {MatIconModule} from '@angular/material/icon';


@Component({
  selector: 'app-products-header',
  standalone: true,
  imports: [MatCardModule , MatMenuModule , MatIconModule],
  templateUrl: './products-header.component.html',
  styleUrl: './products-header.component.scss'
})
export class ProductsHeaderComponent {
  @Output() columnsCountChange = new EventEmitter<number>()
  sort= 'desc' ;
  itemsShowCount = 12 ;


  onSortUpdated(newSort : string) :void {
    this.sort = newSort
  }

  onItemsUpdated(count : number):void {
    this.itemsShowCount = count ;

  }

  onColumnUpdated(colsNum : number):void {
    this.columnsCountChange.emit(colsNum) ;
  }
}
