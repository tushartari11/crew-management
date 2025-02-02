import { Component } from '@angular/core';

@Component({
  selector: 'app-edit-user',
  standalone: false,

  templateUrl: './edit-user.component.html',
  styleUrl: './edit-user.component.scss',
})
export class EditUserComponent {
  adminName: string = 'Tushar';
  anchorUrl: string = 'http://google.com';
  disabled: boolean = true;
  className: string = 'c1';

  buttonClicked() {
    console.log('Button Clicked...');
    this.className = this.className === 'c1' ? 'c2' : 'c1';
    this.disabled = !this.disabled;
  }
  captureValue(event: any) {
    console.log('captureValue: ' + event.key);
  }

  onMouseOver(event: any) {
    this.className = this.className === 'c1' ? 'c2' : 'c1';
  }

  onMouseOut(event: any) {
    this.className = this.className === 'c2' ? 'c1' : 'c2';
  }
}
