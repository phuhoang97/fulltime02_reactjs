import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { act_up } from "../action";
import { act_down } from "../action";
function CountComp() {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(act_up(5))}>Up</button>
      <button onClick={() => dispatch(act_down(3))}>Down</button>
    </div>
  );
}

export default CountComp;
