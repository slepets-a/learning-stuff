import membershipsActionsTypes from './actions';

const initialState = {
  filter: '',
  memberships: [],
  filteredMemberships: [],
};

const handleGetMemberships = (state, action) => ({
  ...state,
  memberships: action.payload.memberships,
  filteredMemberships: action.payload.memberships,
});

const handleFilterMemberships = (state, action) => ({
  ...state,
  filter: action.payload.filter,
  filteredMemberships: state.memberships.filter(membership => membership.description.includes(action.payload.filter)),
});

const handlers = {
  [membershipsActionsTypes.GET_MEMBERSHIPS]: handleGetMemberships,
  [membershipsActionsTypes.FILTER_MEMBERSHIPS]: handleFilterMemberships,
};

const membershipsReducer = (state = initialState, action) => {
  const handler = handlers[action.type];
  console.log(action);
  return handler ? handler(state, action) : state;
};

export default membershipsReducer;
