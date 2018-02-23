const dataTableActionsTypes = {
  GET_MEMBERSHIPS: 'GET_MEMBERSHIPS',
  FILTER_MEMBERSHIPS: 'FILTER_MEMBERSHIPS',
};

// action creators
export const GET_MEMBERSHIPS = memberships => ({
  type: 'GET_MEMBERSHIPS',
  payload: {
    memberships,
  },
});

export const FILTER_MEMBERSHIPS = filter => ({
  type: 'FILTER_MEMBERSHIPS',
  payload: {
    filter,
  },
});

export default dataTableActionsTypes;
