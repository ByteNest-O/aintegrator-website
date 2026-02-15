import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-testimonial',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './testimonial.component.html',
    styleUrl: './testimonial.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class TestimonialComponent { }
