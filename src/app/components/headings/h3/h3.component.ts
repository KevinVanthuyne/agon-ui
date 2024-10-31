import { Component, Input } from '@angular/core';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-h3',
  standalone: true,
  imports: [NgClass],
  templateUrl: './h3.component.html',
  styleUrl: './h3.component.scss',
})
export class H3Component {
  @Input() marginTop = false;
}
