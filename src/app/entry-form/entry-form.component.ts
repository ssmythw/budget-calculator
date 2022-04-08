import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entry-form',
  templateUrl: './entry-form.component.html',
  styleUrls: ['./entry-form.component.scss'],
})
export class EntryFormComponent implements OnInit {
  constructor() {}

  @Output() submitClicked: any = new EventEmitter();
  income: any[] = [];
  expenses: any[] = [];

  entryForm = new FormGroup({
    amount: new FormControl(),
    description: new FormControl(),
  });

  ngOnInit(): void {}

  onSubmit() {
    // Send amount to the parent component and update the total value.
    this.submitClicked.emit(this.entryForm);
    const amount = this.entryForm.value.amount;
    const desc = this.entryForm.value.description;

    if (amount > 0) {
      this.income.push({ amount, desc });
      console.log(this.income);
    } else {
      this.expenses.push({ amount, desc });
      console.log(this.income);
    }

    this.entryForm.reset();
  }
}
