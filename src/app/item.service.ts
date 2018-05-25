import { Item } from './model/Item.model';
import { Injectable} from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class ItemService{


  itens: Item [];

  url = 'http://rest.learncode.academy/api/antoniorrm/item';

  constructor(private http: Http) {

  }

getItems() {
    return this.http.get(this.url)
        .map((res: Response) => {
            this.itens = [];
            for (let p of res.json()) {
                this.itens.push(new Item(p.id, p.titulo, p.descricao));
            }
            return this.itens;
        })
        .catch((err: Response) =>
            Observable.throw(err));
}
addItem(item: Item) {
    return this.http.post(this.url, item)
        .map((res: Response) => res.json())
        .catch((err: Response) => Observable.throw(err));
}

}

