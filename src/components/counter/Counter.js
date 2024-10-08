import React from "react";
import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { arttir, azalt, sifirla } from "../../redux/actions/counterActions";

const Counter = () => {
  const { sayac, text } = useSelector((state) => state.counterReducer);
  const dispatch = useDispatch();

  return (
    <div>
      <h2 className="counter-header">Counter with Redux</h2>
      <h1>{sayac}</h1>
      <h2>{text}</h2>
      <div>
        <button
          onClick={() => dispatch(arttir())}
          className="counter-button positive"
        >
          ARTTIR
        </button>
        <button onClick={() => dispatch(sifirla())} className="counter-button">
          RESET
        </button>
        <button
          onClick={() => dispatch(azalt())}
          className="counter-button negative"
        >
          AZALT
        </button>
      </div>
    </div>
  );
};

export default Counter;
