import { Injectable } from '@angular/core';
import { Itransaction } from '../models/transaction';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {
  item: Itransaction; 

  constructor() { }

  save(tran: Itransaction) {
    this.item = tran;
  }

  getTran(): Itransaction {
    localStorage.setItem('item', JSON.stringify(this.item));  //save in user's PC (password)
    return this.item;
  }

}
