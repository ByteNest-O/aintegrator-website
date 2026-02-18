import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FounderCardComponent } from '../../../../shared/components/founder-card/founder-card.component';

@Component({
    selector: 'app-founders-grid-section',
    standalone: true,
    imports: [CommonModule, FounderCardComponent],
    templateUrl: './founders-grid-section.component.html',
    styleUrl: './founders-grid-section.component.scss'
})
export class FoundersGridSectionComponent {
    @Input() founders: any[] = [];
}
