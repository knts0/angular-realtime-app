import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import * as dayjs from 'dayjs'
import { Subscription } from 'rxjs';

import { APIService, Chat, CreateChatInput } from '../API.service'

@Component({
  selector: 'app-operator-side',
  templateUrl: './operator-side.component.html',
  styleUrls: ['./operator-side.component.scss']
})
export class OperatorSideComponent implements OnInit {

  myId = 'operator1'

  messages: Chat[] = [];
  messageForm: FormGroup;

  private subscriptions: Subscription[] = [];

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

    this.subscriptions.push(<Subscription>(
      this.api.OnCreateChatByFromIdListener(this.myId).subscribe((event: any) => {
        const newMessage = event.value.data.onCreateChatByFromId;
        this.messages = [...this.messages, newMessage];
      })
    ));

    this.subscriptions.push(<Subscription>(
      this.api.OnCreateChatByToIdListener(this.myId).subscribe((event: any) => {
        const newMessage = event.value.data.onCreateChatByToId;
        this.messages = [...this.messages, newMessage];
      })
    ));
  }

  ngOnDestroy() {
    this.subscriptions.forEach(v => v.unsubscribe());
  }

  onCreate(value: { message: string }): void {
    const createChatInput: CreateChatInput = {
      fromId: 'operator1',
      toId: 'customer1',
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
