import membershipsActionsTypes from './actions';

const initialState = {
  filter: '',
  memberships: [],
  filteredMemberships: [],
};

const handleGetMemberships = (state, {memberships}) => ({
  ...state,
  memberships,
  filteredMemberships: memberships,
});

const handleFilterMemberships = (state, {filter}) => ({
  ...state,
  filter: filter,
  filteredMemberships: state.memberships.filter(membership => membership.description.includes(filter)),
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
