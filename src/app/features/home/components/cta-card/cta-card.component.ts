import { Component, ChangeDetectionStrategy, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cta-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cta-card.component.html',
    styleUrl: './cta-card.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None
})
export class CtaCardComponent { }
