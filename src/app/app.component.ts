import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'budget-app';
  amount = 1;
  parentEventHandler(amount: any) {
    //check if deleted item
    if (amount.deleteFlag == true) {
      console.log('deleting item');
      this.amount = this.amount - amount.amount;
    } else {
      this.amount = this.amount + amount;
    }
  }
}
