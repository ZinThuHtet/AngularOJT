import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'reactive-form';
  requiredForm!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.myForm();
  }

  myForm() {
    this.requiredForm = this.fb.group({
      name: ['', Validators.required] 
    });
  }
}
