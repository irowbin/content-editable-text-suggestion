import { Component, Input, OnInit, Optional } from '@angular/core';

@Component({
  selector: 'app-content-editor',
  templateUrl: './content-editor.component.html',
  styleUrls: ['./content-editor.component.css'],
})
export class ContentEditorComponent implements OnInit {
  @Input()
  public editorPanelClass = 'content-editor';

  @Input()
  public suggestionsList: Array<unknown> = []

  @Input()
  public fieldToSearchTerm: string;

  @Input()
  public fieldForValue: string;

  filteredSuggestion = [];

  constructor() {}

  ngOnInit() {}
}
