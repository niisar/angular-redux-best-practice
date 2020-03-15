import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { GeoBoardComponent } from './geo-board/geo-board.component';
import { SearchBarComponent } from './search-bar/search-bar.component';


@NgModule({
  declarations: [ SearchBarComponent,
    GeoBoardComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forChild([
      {
        path: '',
        children: [
          {
            path: 'geo', component: GeoBoardComponent,
          },
        ]
      }
    ]),
  ]
})
export class GeoDashboardModule { }
