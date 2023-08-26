import { Component, Input, OnInit } from '@angular/core';
import { ICourse } from '../cards-component/model';
import { courseData } from './course-card-data';

@Component({
  selector: 'lib-filters-component',
  templateUrl: './filters-component.component.html',
  styleUrls: ['./filters-component.component.css'],
})
export class FiltersComponentComponent implements OnInit {
  @Input() course: ICourse | any = courseData;
  constructor() {}

  ngOnInit(): void {}
}
