import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FinalCtaComponent } from '../../shared/components/final-cta/final-cta.component';

@Component({
    selector: 'app-contact',
    standalone: true,
    imports: [CommonModule, RouterModule, FinalCtaComponent],
    templateUrl: './contact.component.html',
    styleUrl: './contact.component.scss'
})
export class ContactComponent { }
