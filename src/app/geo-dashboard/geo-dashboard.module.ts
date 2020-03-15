import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { RouterModule } from '@angular/router';
import { GeoBoardComponent } from './geo-board/geo-board.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { StoreModule } from '@ngrx/store';
import * as fromGeoDashboard from './reducers';
import { EffectsModule } from '@ngrx/effects';
import { SearchEffects } from './reducers/search.effects';


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
    StoreModule.forFeature(fromGeoDashboard.geoDashboardFeatureKey, fromGeoDashboard.reducers, { metaReducers: fromGeoDashboard.metaReducers }),
    EffectsModule.forFeature([SearchEffects]),
  ]
})
export class GeoDashboardModule { }
