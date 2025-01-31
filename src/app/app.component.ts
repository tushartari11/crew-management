import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CrewComponent } from './crew/crew.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, CrewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crew-management';
}
