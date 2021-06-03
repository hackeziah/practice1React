import React, { useContext } from 'react'
import ComponentB from './ComponentB'
import { Button, ButtonGroup, Badge } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { CounterContext } from '../App'
const ComponentA = () => {
    const countercontext = useContext(CounterContext)
    const { counter, dispatch } = countercontext
    return (
        <div>
            <div>Component A</div>
            <ButtonGroup>
                <Button color="primary" outline>
                    ComponentA Counter1 <Badge color="secondary">{counter}</Badge>
                </Button>
                {/* <Button color="primary" outline>
                    Counter2 <Badge color="secondary">{counter}</Badge>
                </Button> */}

            </ButtonGroup>
            <p>Counter 1</p>
            <ButtonGroup>
                <Button color='dark' onClick={() => dispatch({ type: 'increment', payload: 1 })}>Increment</Button>
                <Button color='dark' onClick={() => dispatch({ type: 'decrement', payload: 1 })}>Decrement</Button>
                <Button color='danger' onClick={() => dispatch({ type: 'reset' })}> Reset</Button>
            </ButtonGroup>

            {/* <ComponentB /> */}
        </div>
    )
}

export default ComponentA

