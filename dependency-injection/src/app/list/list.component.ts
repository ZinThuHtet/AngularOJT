import { Component, OnInit } from '@angular/core';
import { Message, MessageRepository } from '../resources/message.resources';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  list: Message[]
  
  constructor() { 
    const repo = new MessageRepository
    this.list = repo.getAll();
  }
}
