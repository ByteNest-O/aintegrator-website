import { Component, input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-testimonial-section',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './testimonial-section.component.html',
    styleUrl: './testimonial-section.component.scss'
})
export class TestimonialSectionComponent {
    readonly alignment = input<'left' | 'center'>('center');
    readonly fullWidth = input<boolean>(false);
    readonly quote = input.required<string>();
    readonly author = input.required<string>();
    readonly role = input.required<string>();
    readonly avatarUrl = input.required<string>();
}
