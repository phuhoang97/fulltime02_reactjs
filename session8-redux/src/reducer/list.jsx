import * as types from "../constant/actionType";

const initialState = [3, 5, 7];

const list = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_RANDOM_NUMBER:
      state = [...state, Math.floor(Math.random() * 10)];
      return state;
    default:
      return state;
  }
};

export default list;
