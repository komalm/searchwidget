import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.css'],
})
export class CardsComponentComponent implements OnInit {
  @Input() name: string = '';
  @Input() type: string = '';
  @Input() tags: Array<string> = [''];
  @Input() image: string = '';
  @Input() subject: string = '';
  @Input() publisher: string = '';

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {}
}
