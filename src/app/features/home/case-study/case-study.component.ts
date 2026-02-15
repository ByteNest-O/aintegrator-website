import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-case-study',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './case-study.component.html',
    styleUrl: './case-study.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CaseStudyComponent { }
