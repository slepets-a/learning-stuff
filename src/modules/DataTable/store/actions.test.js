import dataTableActionsTypes from './actions';
import * as actions from './actions';

describe('actions', () => {
  it('should create an action to set filter phrase', () => {
    const filter = 'amet';
    const expectedAction = {
      type: dataTableActionsTypes.FILTER_MEMBERSHIPS,
      payload: {
        filter,
      }
    };

    expect(actions.FILTER_MEMBERSHIPS(filter)).toEqual(expectedAction);
  })
});
