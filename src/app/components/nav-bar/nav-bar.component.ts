import { Component, Input } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss'],
})
export class NavBarComponent {
  @Input() title?: string;
  navOpen = false;

  constructor(private authService: AuthService) {}

  get displayTitle(): string {
    return this.title ? `- ${this.title}` : '';
  }

  get isAuthenticated(): boolean {
    return this.authService.authenticated;
  }

  logout(): void {
    this.authService.logout();
  }

  protected toggleNav() {
    this.navOpen = !this.navOpen;
  }
}
