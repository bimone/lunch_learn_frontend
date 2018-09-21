import * as actionsTypes from '../actionsTypes';

const inititalState = {
  famousPeople: [],
  loading: true,
  error: false,
};


export default (state = inititalState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_FAMOUS_PEOPLE: {
      const { data } = action.payload;
      return {
        ...state,
        loading: false,
        famousPeople: [...data],
      };
    }
    default:
      return state;
  }
};
