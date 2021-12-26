import { Component, OnInit } from '@angular/core';
import { Message } from '../models/message';

@Component({
  selector: 'app-customer-side',
  templateUrl: './customer-side.component.html',
  styleUrls: ['./customer-side.component.scss']
})
export class CustomerSideComponent implements OnInit {

  myId = 'customer1'

  messages: Message[] = [
    { fromId: 'customer1', toId: 'operator1', message: 'テスト', createdAt: '2021-12-26 12:00:00' },
    { fromId: 'customer1', toId: 'operator1', message: 'テスト2', createdAt: '2021-12-26 12:00:00' },
    { fromId: 'operator1', toId: 'customer1', message: '応答テスト', createdAt: '2021-12-26 13:00:00' },
    { fromId: 'customer1', toId: 'operator1', message: '了解です', createdAt: '2021-12-26 14:00:00' },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
