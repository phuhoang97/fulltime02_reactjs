import * as types from "../constant/actionType";

export const act_up = (value) => {
  console.log("Value của action", value);
  console.log("Đã vào action");
  return {
    type: types.COUNT_UP,
    payload: value,
  };
};

export const act_down = (value) => {
  console.log("Value của down", value);
  return {
    type: types.COUNT_DOWN,
    payload: value,
  };
};

export const add_random_number = () => {
  return {
    type: types.ADD_RANDOM_NUMBER,
  };
};
