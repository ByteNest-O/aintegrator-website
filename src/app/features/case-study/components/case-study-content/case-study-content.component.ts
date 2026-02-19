import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialSectionComponent } from '../../../../shared/components/testimonial-section/testimonial-section.component';

@Component({
    selector: 'app-case-study-content',
    standalone: true,
    imports: [CommonModule, TestimonialSectionComponent],
    templateUrl: './case-study-content.component.html',
    styleUrl: './case-study-content.component.scss'
})
export class CaseStudyContentComponent { }
