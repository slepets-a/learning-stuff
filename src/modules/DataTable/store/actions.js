// const membershipsActionsTypes

export const GET_MEMBERSHIPS = memberships => ({
  type: 'GET_MEMBERSHIPS',
  payload: memberships,
});

export const FILTER_MEMBERSHIPS_PHRASE = phrase => ({
  type: 'FILTER_MEMBERSHIPS_PHRASE',
  payload: phrase,
});
