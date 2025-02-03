import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-two-way',
  imports: [FormsModule],
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.scss',
})
export class TwoWayComponent {
  name: string = '';
  isChecked: boolean = false;
  selectedOption: string = '';
  dropDownOption: string = '';
  textAreaValue: string = '';
}
