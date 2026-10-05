import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StopwatchComponent } from './components/stopwatch/stopwatch.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,StopwatchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'stopwatch';
}
