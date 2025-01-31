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
}
