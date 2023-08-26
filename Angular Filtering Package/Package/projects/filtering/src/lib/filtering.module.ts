import { NgModule } from '@angular/core';
import { FilteringComponent } from './filtering.component';
import { FiltersComponentComponent } from './components/filters-component/filters-component.component';
import { CardsComponentComponent } from './components/cards-component/cards-component.component';

@NgModule({
  declarations: [
    FilteringComponent,
    FiltersComponentComponent,
    CardsComponentComponent,
  ],
  imports: [],
  exports: [
    FilteringComponent,
    FiltersComponentComponent,
    CardsComponentComponent,
  ],
})
export class FilteringModule {}
