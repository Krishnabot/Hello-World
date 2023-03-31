import { useSelector, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { greet } from "../redux/greeting/greeting";

const Greeting = () => {
  const greeting = useSelector((state) => state.greeting);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(greet());
  }, []);

  return (
    <div>
      <h1>{greeting}</h1>
    </div>
  );
};

export default Greeting;
