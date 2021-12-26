import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as dayjs from 'dayjs'
import { Subscription } from 'rxjs';

import { APIService, Chat, CreateChatInput } from '../API.service'

@Component({
  selector: 'app-customer-side',
  templateUrl: './customer-side.component.html',
  styleUrls: ['./customer-side.component.scss']
})
export class CustomerSideComponent implements OnInit {

  myId = 'customer1'

  messages: Chat[] = [];
  messageForm: FormGroup;

  private subscription: Subscription | null = null;

  constructor(private api: APIService, private fb: FormBuilder) {
    this.messageForm = this.fb.group({
      message: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    const filteringCondition = {
      or: [
        { toId: { eq: this.myId } },
        { fromId: { eq: this.myId } },
      ]
    }
    this.api.ListChats(filteringCondition).then((event) => {
      const messages = event.items as Chat[];
      messages.sort((a, b) => dayjs(a.createdAt).diff(b.createdAt))
      this.messages = messages
    });

    this.subscription = <Subscription>(
      this.api.OnCreateChatByFromIdListener(this.myId).subscribe((event: any) => {
        const newMessage = event.value.data.onCreateChatByFromId;
        this.messages = [...this.messages, newMessage];
      })
    );
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
    this.subscription = null;
  }

  onCreate(value: { message: string }): void {
    const createChatInput: CreateChatInput = {
      // id?: string | null;
      fromId: 'customer1',
      toId: 'operator1',
      message: value.message,
    }
    this.api
      .CreateChat(createChatInput)
      .then((event) => {
        console.log("item created!");
        this.messageForm.reset();
      })
      .catch((e) => {
        console.log("error creating chat...", e);
      });

  }

}
