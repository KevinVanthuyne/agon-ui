import { Component } from '@angular/core';
import { TickerItemComponent } from '../ticker-item.component';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-competition-qr-code',
  templateUrl: './competition-qr-code.component.html',
  styleUrls: ['./competition-qr-code.component.scss'],
})
export class CompetitionQrCodeComponent extends TickerItemComponent {
  get partakeUrl(): string {
    return environment.partakeCompetitionUrl;
  }
}
