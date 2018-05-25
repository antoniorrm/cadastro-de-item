import { Item } from './../model/Item.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-detalhe-item',
  templateUrl: './detalhe-item.component.html',
  styleUrls: ['./detalhe-item.component.css']
})
export class DetalheItemComponent implements OnInit {

  @Input() item: Item;

  constructor() { }

  ngOnInit() {
  }

}
