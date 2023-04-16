import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'firstAngularApp';
  name = 'Mikolaj';
  message = 'Welcome';

  receivedMessage = '';

  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
}
