import { createAction, props } from '@ngrx/store';
import { IGeo } from './models/geo';

export const loadSearchs = createAction(
  '[Search] Load Searchs',
  props<{ location: string }>()
);

export const loadSearchsSuccess = createAction(
  '[Search] Load Searchs Success',
  props<{ data: IGeo }>()
);

export const loadSearchsFailure = createAction(
  '[Search] Load Searchs Failure',
  props<{ error: any }>()
);
