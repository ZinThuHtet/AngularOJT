import { Component, OnInit } from '@angular/core';
import { DebugService } from './debug.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit { 
  title = 'my-app'; 
  constructor(private debugService : DebugService) {} ngOnInit() { 
     this.debugService.info("Angular Application starts"); 
  } 
}
