import membershipsActionsTypes from './actions';

const initialState = {
  filter: '',
  memberships: [],
};

const handleGetMemberships = (state, action) => ({
  ...state,
  memberships: action.payload.memberships,
});

const handleFilterMembershipsPhrase = (state, action) => ({
  ...state,
  filter: action.payload.filter,
});

const handlers = {
  [membershipsActionsTypes.GET_MEMBERSHIPS]: handleGetMemberships,
  [membershipsActionsTypes.FILTER_MEMBERSHIPS_PHRASE]: handleFilterMembershipsPhrase,
};

const membershipsReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  console.log(action);
  return handler ? handler(state, action) : state;
};

export default membershipsReducer;
