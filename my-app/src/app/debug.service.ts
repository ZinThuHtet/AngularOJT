import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
  
export class DebugService {
  info(message : String) : void { 
    console.log(message); 
 }
  constructor() { }
}
