import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Action } from '@ngrx/store';
import * as srch from './search.actions';
import { DataService } from 'src/app/data.service';
import { IGeo } from './models/geo';


@Injectable()
export class SearchEffects {
  constructor(private dataService: DataService, private actions$: Actions) { }

  LoadSearchs$: Observable<Action> = createEffect(() =>
    this.actions$.pipe(
      ofType(srch.loadSearchs),
      mergeMap(action => this.dataService.getGeoCodes(action.location).pipe(
        map((res:IGeo) => {
          return srch.loadSearchsSuccess({
            data: res
          })
        }),
        catchError(err => {
          return of(srch.loadSearchsFailure(err))
        })
      ))
    )
  );

}
