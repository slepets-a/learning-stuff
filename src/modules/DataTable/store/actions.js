const membershipsActionsTypes = {
  GET_MEMBERSHIPS: 'GET_MEMBERSHIPS',
  FILTER_MEMBERSHIPS: 'FILTER_MEMBERSHIPS',
};

// action creators
export const GET_MEMBERSHIPS = memberships => ({
  type: 'GET_MEMBERSHIPS',
  memberships,
});

export const FILTER_MEMBERSHIPS = filter => ({
  type: 'FILTER_MEMBERSHIPS',
  filter,
});

export default membershipsActionsTypes;
