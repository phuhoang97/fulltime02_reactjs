import * as types from "../constant/actionType";

const initialState = 0;

const count = (state = initialState, action) => {
  console.log("Vào reducer");
  console.log(action);
  switch (action.type) {
    case types.COUNT_UP:
      state += action.payload;
      return state;
    case types.COUNT_DOWN:
      state -= action.payload;
      return state;
    default:
      return state;
  }
};

export default count;
