import { Item } from './../model/Item.model';
import { ItemService} from './../item.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit {

  itens: Item [];

  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.getAll();
  }

  getAll(){
    this.itemService.getItems().subscribe(data => {
      this.itens = data;
      console.log(data);
    },
      error => console.log(error));
  }


}
