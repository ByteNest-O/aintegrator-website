import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-founder-card',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './founder-card.component.html',
    styleUrl: './founder-card.component.scss'
})
export class FounderCardComponent {
    @Input() avatar: string = '';
    @Input() name: string = '';
    @Input() role: string = '';
    @Input() linkedin: string = '#';
}
