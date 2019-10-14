
import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../services/transaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-submit',
  templateUrl: './submit.component.html',
  styleUrls: ['./submit.component.css']
})
export class SubmitComponent implements OnInit {

  item: any;

  constructor(private tSvc: TransactionService, private router: Router) { }

  ngOnInit() {
    this.item = this.tSvc.getTran();
  }

}


