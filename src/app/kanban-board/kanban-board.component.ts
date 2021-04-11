import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { extend } from '@syncfusion/ej2-base';
import { KanbanComponent, CardSettingsModel } from '@syncfusion/ej2-angular-kanban';
import { kanbanData } from './data';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class KanbanBoardComponent {
  @ViewChild('kanbanObj') kanbanObj: KanbanComponent;
  public kanbanData: Object[] = extend([], kanbanData, null, true) as Object[];
  public cardSettings: CardSettingsModel = {
    contentField: 'Summary',
    headerField: 'Id',
    tagsField: 'Tags',
    grabberField: 'Color',
    footerCssField: 'ClassName'
  };
}
