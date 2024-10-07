import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../redux/actions/counterActions';

const Counter = () => {
    // Using the Redux state for count
    const count  = useSelector((state) => state.count);
    const dispatch = useDispatch();

    return (
        <center>
            <h1>Counter: {count}</h1>
            
            {/* Dispatching the increment and decrement actions */}
            <button onClick={() => dispatch(increment())}> + </button>
            <button onClick={() => dispatch(decrement())}> - </button>
        </center>
    );
}

export default Counter;
