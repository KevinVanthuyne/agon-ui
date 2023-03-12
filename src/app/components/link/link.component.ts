import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
})
export class LinkComponent {
  @Input() href!: string;
  @Input() margin = false;
  @Input() innerStyle?: { [property: string]: string };
}
