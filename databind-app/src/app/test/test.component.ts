import { Component, OnInit } from '@angular/core';
import { Test } from '../test';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})

//export class TestComponent { 
//  userName: string = "Jame"; 
//  myCSSClass = "red"; 
//  applyCSSClass = false; 
//  myColor = "brown";
//  showData($event: any){ 
//     console.log("button is clicked!"); if($event) { 
//        console.log($event.target); 
//        console.log($event.target.value); 
//     } 
//  } 
//}

export class TestComponent implements OnInit { 
  title!: string; 
  expenseEntry!: Test; 
  constructor() { } 
  ngOnInit() { 
     this.title = "Expense Entry"; 
     this.expenseEntry = { 
        id: 1, 
        item: "Pizza", 
        amount: 21, 
        category: "Food", 
        location: "Zomato", 
        spendOn: new Date(2020, 6, 1, 10, 10, 10), createdOn: new Date(2020, 6, 1, 10, 10, 10), 
     }; 
  } 
}