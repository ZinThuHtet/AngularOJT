import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-for-of-demo',
  templateUrl: './ng-for-of-demo.component.html',
  styleUrls: ['./ng-for-of-demo.component.css']
})
export class NgForOfDemoComponent {

  divisions = [
    { id: 1, name: 'Bago Region', capital: 'Bago' },
    { id: 2, name: 'Ayeyarwaddy Region', capital: 'Pathein' },
    { id: 3, name: 'Chin Region', capital: 'Hakha' },
    { id: 4, name: 'Kachin Region', capital: 'Myitkyina' },
  ]
}
