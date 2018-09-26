import * as actionsTypes from '../actionsTypes';

const inititalState = {
  famousPeople: [],
  loading: true,
  error: false,
};


export default (state = inititalState, action) => {
  switch (action.type) {
    case actionsTypes.FETCH_FAMOUS_PEOPLE: {
      return {
        ...state,
        loading: true,
      };
    }
    case actionsTypes.FETCH_FAMOUS_PEOPLE_SUCCESS: {
      const { data } = action.payload;
      return {
        ...state,
        loading: false,
        famousPeople: [...data],
      };
    }
    case actionsTypes.FETCH_MORE_FAMOUS_PEOPLE_SUCCESS: {
      const { data } = action.payload;
      debugger;
      return {
        ...state,
        famousPeople: [...data, ...state.famousPeople],
      };
    }
    default:
      return state;
  }
};
