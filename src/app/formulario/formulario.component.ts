import { Item } from './../model/Item.model';
import { ItemService } from './../item.service';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  item: Item;
  titulo: string = '';
  descricao: string = '';

  constructor(private itemService: ItemService, private location: Location ) { }

  ngOnInit() {
  }

  enviarItem(event) {
    this.addItem(event);
  }

  addItem(event) {
    this.itemService.addItem(new Item(null, this.titulo, this.descricao))
      .subscribe(data => {
        console.log(data);
        this.location.back();
      },
        error => console.log(error));
  }

  cancelar() {
    this.location.back();
  }

}
