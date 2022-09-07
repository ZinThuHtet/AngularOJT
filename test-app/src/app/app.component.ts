import { Component } from '@angular/core';
import {Observable} from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { FormGroup, FormControl, Validators, FormBuilder  } from '@angular/forms'
import { ExpenseEntry } from './interface/expense-entry';
import { MatTableDataSource } from '@angular/material/table';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
  
export class AppComponent {
  displayedColumns: string[] = ['item', 'amount', 'category', 'location', 'spendOn'];

  dataSource = new MatTableDataSource < ExpenseEntry >(lists) ;

  myControl = new FormControl('');

  public requiredForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email])
  });

  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions!: Observable<string[]>;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
}

const lists: ExpenseEntry[] = [{
  item: "Pizza",
  amount: 21,
  category: "Food",
  location: "Zomato",
  spendOn: new Date(2020, 6, 1, 10, 10, 10)
}];