const initialState = {
  memberships: [],
};

const membershipsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_MEMBERSHIPS:
      return {
        ...state,
        memberships: action.payload,
      };
    default:
      return state;
  }
};

export default membershipsReducer;
