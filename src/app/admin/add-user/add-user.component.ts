import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  imports: [],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss',
})
export class AddUserComponent {
  // Learning Interpolation

  userName: string = 'Admin from Component';
  userId: number = 10;
}
