import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { courseData } from './course-card-data';
import { ICardClick, ICourse } from './model';

@Component({
  selector: 'lib-cards-component',
  templateUrl: './cards-component.component.html',
  styleUrls: ['./cards-component.component.css'],
})
export class CardsComponentComponent implements OnInit {
  @Input() course: ICourse | any = courseData;
  @Input() isMobile = false;
  @Input() isOffline = false;
  @Input() cardImg = courseData.appIcon;
  @Input() section = '';
  @Input() isLoading: boolean | undefined;
  @Input() isMenu: boolean = false;

  @Output() cardClick: EventEmitter<ICardClick> = new EventEmitter();
  @Output() menuClick: EventEmitter<ICardClick> = new EventEmitter();

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit(): void {}

  onClick(event: MouseEvent) {
    this.cardClick.emit({ event: event, data: this.course });
  }
  onMenuClick(event: MouseEvent) {
    this.menuClick.emit({ event: event, data: this.course });
  }
}
