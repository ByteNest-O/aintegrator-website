import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [RouterLink, RouterLinkActive],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
    /** Centralized asset paths */
    readonly logoSrc = 'assets/logos/logo.png';
    // User reintroduced icon src, ensuring it points to assets
    readonly arrowIconSrc = 'assets/icons/Frame.svg';

    /** Mobile menu state */
    mobileMenuOpen = false;

    toggleMobileMenu(): void {
        this.mobileMenuOpen = !this.mobileMenuOpen;
    }

    closeMobileMenu(): void {
        this.mobileMenuOpen = false;
    }
}
