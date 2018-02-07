const membershipsActionsTypes = {
  GET_MEMBERSHIPS: 'GET_MEMBERSHIPS',
  FILTER_MEMBERSHIPS_PHRASE: 'FILTER_MEMBERSHIPS_PHRASE',
};

// action creators
export const GET_MEMBERSHIPS = memberships => ({
  type: 'GET_MEMBERSHIPS',
  payload: {
    memberships,
  },
});

export const FILTER_MEMBERSHIPS_PHRASE = filter => ({
  type: 'FILTER_MEMBERSHIPS_PHRASE',
  payload: {
    filter,
  },
});

export default membershipsActionsTypes;
