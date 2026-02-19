import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-progress-bar',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './progress-bar.component.html',
    styleUrls: ['./progress-bar.component.scss']
})
export class ProgressBarComponent {
    progress = 0;

    @HostListener('window:scroll', [])
    onWindowScroll() {
        const windowHeight = window.innerHeight;
        const documentHeight = document.documentElement.scrollHeight;
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

        const scrollMax = documentHeight - windowHeight;

        if (scrollMax > 0) {
            this.progress = (scrollTop / scrollMax) * 100;
        } else {
            this.progress = 0;
        }
    }
}
