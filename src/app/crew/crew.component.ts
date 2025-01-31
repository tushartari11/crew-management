import { Component } from '@angular/core';
import { CrewDesignationsComponent } from '../crew-designations/crew-designations.component';

@Component({
  selector: 'app-crew',
  imports: [CrewDesignationsComponent],
  templateUrl: './crew.component.html',
  styleUrl: './crew.component.scss',
})
export class CrewComponent {
  messageForComponent: string = 'From Parent';
  userToken: string = 'jjahsd22sasad35';

  receivedMessage: string = '';

  receivingMessage(message: string) {
    this.receivedMessage = message;
  }
}
