import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { add_random_number } from "../action";
function ArrListComp() {
  const randomNumberList = useSelector((state) => {
    return state.list;
  });
  const dispatch = useDispatch();

  return (
    <div>
      <p>Array List: {randomNumberList.toString()}</p>
      <button onClick={() => dispatch(add_random_number())}>
        Click add random number
      </button>
    </div>
  );
}

export default ArrListComp;
