import classes from "../assets/css/Counter.module.css";
import { useSelector, useDispatch } from "react-redux";
import { counterActions } from "../store/index";

const Counter = () => {
  const counter = useSelector((state) => state.counter.valuecounter);
  const showCounter = useSelector((state) => state.counter.showCounter);
  const dispatch = useDispatch();

  const IncrementHandler = () => {
    dispatch(counterActions.Increment());
  };
  const DecrementHandler = () => {
    dispatch(counterActions.Decrement());
  };
  const IncreaseHandler = () => {
    dispatch(counterActions.Increase(10));
  };
  const ShowCounter = () => {
    dispatch(counterActions.Showtoggle());
  };

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {showCounter && <div className={classes.value}>{counter}</div>}
      <button onClick={() => {IncrementHandler();}}>INCREMENT </button>
      <button onClick={() => {DecrementHandler();}}>DECREMENT</button>
      <button onClick={() => { IncreaseHandler();}}>INCREASE BY 10</button>
      <div>
        <button onClick={() => {ShowCounter();}}>SHOW TOGGLE</button>
      </div>
    </main>
  );
};

export default Counter;
