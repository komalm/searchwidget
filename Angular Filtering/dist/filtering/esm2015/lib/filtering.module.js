import { NgModule } from '@angular/core';
import { FilteringComponent } from './filtering.component';
import { FiltersComponentComponent } from './components/filters-component/filters-component.component';
import { CardsComponentComponent } from './components/cards-component/cards-component.component';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { WrapperComponent } from './components/wrapper/wrapper.component';
export class FilteringModule {
}
FilteringModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    FilteringComponent,
                    FiltersComponentComponent,
                    CardsComponentComponent,
                    WrapperComponent,
                ],
                imports: [BrowserModule, CommonModule],
                exports: [
                    FilteringComponent,
                    FiltersComponentComponent,
                    CardsComponentComponent,
                    WrapperComponent,
                ],
            },] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsdGVyaW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL2ZpbHRlcmluZy9zcmMvbGliL2ZpbHRlcmluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQUMzRCxPQUFPLEVBQUUseUJBQXlCLEVBQUUsTUFBTSw0REFBNEQsQ0FBQztBQUN2RyxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSx3REFBd0QsQ0FBQztBQUNqRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sMkJBQTJCLENBQUM7QUFDMUQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxnQkFBZ0IsRUFBRSxNQUFNLHdDQUF3QyxDQUFDO0FBaUIxRSxNQUFNLE9BQU8sZUFBZTs7O1lBZjNCLFFBQVEsU0FBQztnQkFDUixZQUFZLEVBQUU7b0JBQ1osa0JBQWtCO29CQUNsQix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtvQkFDdkIsZ0JBQWdCO2lCQUNqQjtnQkFDRCxPQUFPLEVBQUUsQ0FBQyxhQUFhLEVBQUUsWUFBWSxDQUFDO2dCQUN0QyxPQUFPLEVBQUU7b0JBQ1Asa0JBQWtCO29CQUNsQix5QkFBeUI7b0JBQ3pCLHVCQUF1QjtvQkFDdkIsZ0JBQWdCO2lCQUNqQjthQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEZpbHRlcmluZ0NvbXBvbmVudCB9IGZyb20gJy4vZmlsdGVyaW5nLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBGaWx0ZXJzQ29tcG9uZW50Q29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2ZpbHRlcnMtY29tcG9uZW50L2ZpbHRlcnMtY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBDYXJkc0NvbXBvbmVudENvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYXJkcy1jb21wb25lbnQvY2FyZHMtY29tcG9uZW50LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBCcm93c2VyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlcic7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgV3JhcHBlckNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy93cmFwcGVyL3dyYXBwZXIuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbXG4gICAgRmlsdGVyaW5nQ29tcG9uZW50LFxuICAgIEZpbHRlcnNDb21wb25lbnRDb21wb25lbnQsXG4gICAgQ2FyZHNDb21wb25lbnRDb21wb25lbnQsXG4gICAgV3JhcHBlckNvbXBvbmVudCxcbiAgXSxcbiAgaW1wb3J0czogW0Jyb3dzZXJNb2R1bGUsIENvbW1vbk1vZHVsZV0sXG4gIGV4cG9ydHM6IFtcbiAgICBGaWx0ZXJpbmdDb21wb25lbnQsXG4gICAgRmlsdGVyc0NvbXBvbmVudENvbXBvbmVudCxcbiAgICBDYXJkc0NvbXBvbmVudENvbXBvbmVudCxcbiAgICBXcmFwcGVyQ29tcG9uZW50LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGaWx0ZXJpbmdNb2R1bGUge31cbiJdfQ==