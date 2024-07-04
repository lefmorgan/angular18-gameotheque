import { Component } from '@angular/core';
import { SelectPeopleComponent } from '../../../../shared/components/people/select-people/select-people.component';

@Component({
  selector: 'app-main-filters',
  standalone: true,
  imports: [SelectPeopleComponent],
  templateUrl: './main-filters.component.html',
  styleUrl: './main-filters.component.scss'
})
export class MainFiltersComponent {

}
