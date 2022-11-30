import { useSelector,useDispatch} from 'react-redux';
import { increment,decrement,test } from './redux/CounterSlice'
import { test2 } from './redux/TestSlice'
function App() {
  const dispatch = useDispatch()
  const {count} = useSelector(state => state.counter)
  const test2string = useSelector(state => state.test)
  return (
    <div >
      <h1>The count is: {count}</h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(test({testValue: 33}))}>test</button>
      <button onClick={() => dispatch(test2('test3'))}>test2</button>
      <h1>{test2string}</h1>
    </div>
  );
}

export default App;
