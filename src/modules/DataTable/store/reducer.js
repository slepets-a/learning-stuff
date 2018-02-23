import dataTableActionsTypes from './actions';

const initialState = {
  filter: '',
  memberships: [],
};

const handleGetMemberships = (state, action) => ({
  ...state,
  memberships: action.payload.memberships,
  filter: '',
});

const handleFilterMemberships = (state, action) => ({
  ...state,
  filter: action.payload.filter,
});

const handlers = {
  [dataTableActionsTypes.GET_MEMBERSHIPS]: handleGetMemberships,
  [dataTableActionsTypes.FILTER_MEMBERSHIPS]: handleFilterMemberships,
};

const dataTableReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  return handler ? handler(state, action) : state;
};

export default dataTableReducer;
