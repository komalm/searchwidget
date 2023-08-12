import { Component, Input } from '@angular/core';
import { courseData } from './course-card-data';
import { ICourse } from './model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @Input() course: ICourse | any = courseData;
  title = 'package-test';
}
