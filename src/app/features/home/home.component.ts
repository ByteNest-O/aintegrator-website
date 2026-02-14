import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroComponent } from './hero/hero.component';

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [CommonModule, HeroComponent],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {
    // Partner logos
    partnerLogos = [
        { src: 'assets/logos/image 11.png', alt: 'Partner 1' },
        { src: 'assets/logos/image 12.png', alt: 'Partner 2' },
        { src: 'assets/logos/image 13.png', alt: 'Partner 3' },
        { src: 'assets/logos/image 14.png', alt: 'Partner 4' },
        { src: 'assets/logos/image 15.png', alt: 'Partner 5' },
    ];

    // Statistics
    stats = [
        { value: '70%', label: 'und mehr Effizienzgewinne' },
        { value: '45%', label: 'Kosteneinsparungen' },
        { value: '3+', label: 'Jahre Erfahrung' },
    ];

    // Testimonial
    testimonialImage = 'assets/images/image 65.png';
}
