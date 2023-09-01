import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByValue,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hooks";

function App() {
  const { count } = useAppSelector((state: RootState) => state.counter);
  const dispatch = useAppDispatch();
  return (
    <>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <div>{count}</div>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByValue(10))}>
        Increment By Value
      </button>
    </>
  );
}

export default App;
