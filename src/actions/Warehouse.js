import {
  ActionsTypesCreator,
  ActionsCreator,
  ActionsCreatorsCreator
} from '../utils/Basics';

// Actions
export const Actions = ActionsCreator('Warehouse');
export const ActionsTypes = ActionsTypesCreator('Warehouse');
export const ActionsCreators = ActionsCreatorsCreator(Actions, 'Warehouse');

// Actions Creators
export function GET_ALL() {
  return ActionsCreators.GET_ALL('warehouse');
}
