import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  title: string = 'Hello world!';

  @Input() message: any;
  @Output() messageSent = new EventEmitter<string>();


  sendMessage = () => {
    const message = "Message from child component!";
    this.messageSent.emit(message);
  }

}
