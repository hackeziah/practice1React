import React, { useReducer } from 'react';
import { Button, ButtonGroup, Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const InitialState = {
    counter: 0,
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { ...state, counter: state.counter + action.payload }
        case 'decrement':
            return { ...state, counter: state.counter - action.payload }
        case 'reset':
            return InitialState;
        default:
            return state

    }
}

const Counter = () => {
    const [state1, dispatch1] = useReducer(reducer, InitialState)
    const [state2, dispatch2] = useReducer(reducer, InitialState)

    return (
        <div>
            {/* <ButtonGroup>
                <Button color="primary" outline>
                    Counter1 <Badge color="secondary">{state1.counter}</Badge>
                </Button>
                <Button color="primary" outline>
                    Counter2 <Badge color="secondary">{state2.counter}</Badge>
                </Button>

            </ButtonGroup>
            <p>Counter 1</p>
            <ButtonGroup>
                <Button color='dark' onClick={() => dispatch1({ type: 'increment', payload: 1 })}>Increment</Button>
                <Button color='dark' onClick={() => dispatch1({ type: 'decrement', payload: 1 })}>Decrement</Button>
                <Button color='danger' onClick={() => dispatch1({ type: 'reset' })}> Reset</Button>
            </ButtonGroup>


            <p>Counter 2</p>
            <ButtonGroup>
                <Button color='dark' onClick={() => dispatch2({ type: 'increment', payload: 2 })}>Increment</Button>
                <Button color='dark' onClick={() => dispatch2({ type: 'decrement', payload: 2 })}>Decrement</Button>
                <Button color='danger' onClick={() => dispatch2({ type: 'reset' })}> Reset</Button>
            </ButtonGroup> */}

        </div>
    )
}
export default Counter