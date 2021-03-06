import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo-item',
  template: `
    <p>
      {{itemTitle.title}}
    </p>
  `,
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {
  @Input() itemTitle: any;
  @Output() submit: EventEmitter<string> = new EventEmitter();

  constructor() {
  }
  changeTitle(newTitle: string): void {
    this.submit.emit(newTitle);
  }
  ngOnInit() {
    this.itemTitle = 'nuevo titulo';

  }

}
