import { Component, input } from '@angular/core';

@Component({
    selector: 'app-case-study',
    standalone: true,
    template: `<section class="site-container section-spacing"><h1>Case Study: {{ slug() }}</h1></section>`,
    styles: ``,
})
export class CaseStudyComponent {
    readonly slug = input.required<string>();
}
