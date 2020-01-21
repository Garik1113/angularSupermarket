import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Message {
  name: string;
  email: string;
  text: string;
}
@Injectable({
  providedIn: 'root'
})
export class SendMessageService {
  public messages: Message[] = [];
  public messagesSubject$ = new BehaviorSubject<Message[]>([]);
  constructor() {}
  addMessage(message: Message): void {
    this.messages.push(message);
    this.messagesSubject$.next(this.messages);
  }
}
