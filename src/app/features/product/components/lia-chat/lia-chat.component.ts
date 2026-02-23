import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-lia-chat',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './lia-chat.component.html',
    styleUrl: './lia-chat.component.scss',
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LiaChatComponent { }
