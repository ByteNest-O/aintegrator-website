import { Component, ChangeDetectionStrategy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Search, ListTodo, Ellipsis, Check, Calendar } from 'lucide-angular';

@Component({
  selector: 'app-agentic-actions',
  standalone: true,
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './agentic-actions.component.html',
  styleUrl: './agentic-actions.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AgenticActionsComponent {
  readonly searchIcon = Search;
  readonly listTodoIcon = ListTodo;
  readonly ellipsisIcon = Ellipsis;
  readonly checkIcon = Check;
  readonly calendarIcon = Calendar;

  readonly actionItems = [
    {
      text: 'Beim Kunden bzgl. der neuen Funktion nachfassen',
      date: '12. Februar 2026'
    },
    {
      text: 'Die wichtigsten Erkenntnisse aus den Meetings zusammenfassen',
      date: '11. Februar 2026'
    },
    {
      text: 'Entwurf des Vorschlags für das nächste Review vorbereiten',
      date: '5. Februar 2026'
    }
  ];
}
