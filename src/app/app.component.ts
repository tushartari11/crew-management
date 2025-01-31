import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { CrewComponent } from './crew/crew.component';
import { UsersModule } from './users/users.module';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, MatButtonModule, CrewComponent, UsersModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'crew-management';
}
