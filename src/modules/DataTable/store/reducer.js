const initialState = {};

const membershipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_MEMBERSHIPS':
      return {
        ...state,
        memberships: action.payload,
      };
    case 'FILTER_MEMBERSHIPS_PHRASE':
      return {
        ...state,
        filter: action.payload,
      };
    default:
      return state;
  }
};

export default membershipsReducer;
