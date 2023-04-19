import "./App.css";
import Buttons from "./components/Buttons";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, reset } from "./redux/Counter";

function App() {
  const count = useSelector((state) => state.data.value);
  const dispatch = useDispatch();

  return (
    <>
      <div className="container">
        <h1>{count}</h1>
        <div className="buttons">
          <Buttons text="Increment" onClick={() => dispatch(increment())} />
          <Buttons text="Decrement" onClick={() => dispatch(decrement())} />
          <Buttons text="Reset" onClick={() => dispatch(reset())} />
        </div>
      </div>
    </>
  );
}

export default App;
