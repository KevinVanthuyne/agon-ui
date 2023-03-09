import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-score-page',
  templateUrl: './score-page.component.html',
  styleUrls: ['./score-page.component.scss'],
})
export class ScorePageComponent {
  constructor(private fb: FormBuilder) {}
}
