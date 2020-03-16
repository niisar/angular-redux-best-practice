import { Action, createReducer, on } from '@ngrx/store';
import { IGeo } from './models/geo';
import * as GeoAction from './search.actions';

export const searchFeatureKey = 'search';

export class State {
  geoDetail?: IGeo;
}

export const initialState: State = {
};

const searchReducer = createReducer(
  initialState,
  on(GeoAction.loadSearchs, state => state),
  on(GeoAction.loadSearchsSuccess, (state: State, { data }) => {
    return { ...state, geodata: data }
  }),
);

export function reducer(state: State | undefined, action: Action) {
  return searchReducer(state, action);
}
