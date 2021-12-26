import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
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
    this.api.ListChats().then((event) => {
      this.messages = event.items as Chat[];
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
