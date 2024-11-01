import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-h2',
  standalone: true,
  imports: [NgClass],
  templateUrl: './h2.component.html',
  styleUrl: './h2.component.scss',
})
export class H2Component {
  @Input() classOverride = 'mb-5'; // This margin is the standard but can be overridden
}
