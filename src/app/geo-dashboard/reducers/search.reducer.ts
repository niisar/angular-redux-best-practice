import { Action, createReducer, on } from '@ngrx/store';


export const searchFeatureKey = 'search';

export interface State {

}

export const initialState: State = {

};

const searchReducer = createReducer(
  initialState,

);

export function reducer(state: State | undefined, action: Action) {
  return searchReducer(state, action);
}
