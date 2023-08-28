import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  buttonName = 'Bootstrap test button';

  onSubmit() {
    console.log('Button was clicked.');
  }
}
