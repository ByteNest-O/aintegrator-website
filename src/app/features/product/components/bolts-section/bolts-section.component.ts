import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-bolts-section',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './bolts-section.component.html',
    styleUrl: './bolts-section.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoltsSectionComponent { }
