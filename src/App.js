import React, { useState, useEffect, useReducer, useMemo, useRef, useCallback } from 'react';
import './App.css';
import Card from './Card';
import { ThemeProvider } from 'styled-components'
import Button from './element/Button'
import axios from 'axios'
import Counter from './components/Counter'
import { Badge, ListGroup, ListGroupItem } from 'reactstrap'; //for reactstrap design 
import MyTestComponent from './components/MyTestComponent';
import Form from './components/Form'
import MyComponentA from './components/MyComponentA'
export const NameContext = React.createContext()
export const ColorContext = React.createContext()
export const CounterContext = React.createContext()
// const theme = {
//   primary: '#4CAF50',
//   mango: 'yellow'
// }

// const InitialState = {
//   counter: 0,
// }


// const reducer = (state, action) => {
//   switch (action.type) {
//     case 'increment':
//       return { ...state, counter: state.counter + action.payload }
//     case 'decrement':
//       return { ...state, counter: state.counter - action.payload }
//     case 'reset':
//       return InitialState;
//     default:
//       return state

//   }
// }


const InitialState = {
  loading: true,
  error: "",
  todos: [],
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATA':
      return {
        loading: false,
        error: "",
        todos: action.payload,
      }

    case 'SET_ERROR':
      return {
        loading: false,
        error: "Some Error",
        todos: [],
      }
    default:
      return state;
  }
}

const functionCounter = new Set()

function App() {
  const inputRef = useRef();

  const [count1, setCount] = useState(0)
  const [count2, setCount2] = useState(0)

  const increment1 = () => {
    setCount(count1 + 1)
  }
  const increment2 = () => {
    setCount2(count2 + 1)
  }

  functionCounter.add(increment1)
  functionCounter.add(increment2)

  console.log(functionCounter)
  return (
    <div className="App">
      <Form />
    </div>
    // {/* //   Counter1 {count1}
    //   Counter2 {count2}
    //   <button onClick={increment1}> Counter 1</button>
    //   <button onClick={increment2}> Counter 2</button> */}


  );
}

export default App;


// const [state, dispatch] = useReducer(reducer, InitialState)

// useEffect(() => {
//   axios.get('https://jsonplaceholder.typicode.com/todos')
//     .then(res => {
//       dispatch({ type: 'SET_DATA', payload: res.data })
//       console.log(res.data)
//     }).catch(err => {
//       dispatch({ type: 'SET_ERROR' })
//     })
// }, [])


////////////////////////////////
// const listMarkup = (

//   <div>

//     <ListGroup>
//       {state.todos.map(item =>
//         <ListGroupItem key={item.id}>{item.title} {item.completed ? (<Badge color="success">Complete</Badge>) : (<Badge color="danger">InComplete</Badge>)}</ListGroupItem>
//       )}

//     </ListGroup>
//   </div>
// )
// const [countA, setCountA] = useState(0)

// use Memo 
// const memoComponentA = useMemo(() => {
//   return <MyComponentA count={countA} />
// }, [countA])

// const increamentA = () => {
//   setCountA(countA + 1)
// }
{/* <input ref={inputRef} type="text" />
<h1>Focus on Input Field</h1>
<input type="text" />
<input type="text" />
<input type="text" />

<button onClick={() => {
  inputRef.current.focus();
}}> Focus</button>

<button onClick={() => setShow(!show)}> Toggle Compoonent</button>
<h1>Unmounting</h1>
{show && <MyTestComponent />} */}
/////////////////////

// Counter {countA} <br />
// <p>
//   <button onClick={increamentA}> Increment Counter </button>

// </p>
// {memoComponentA}


{/* {state.loading ? 'Loading' : (state.error ? state.error : listMarkup)} */ }
  // const [card, setCards] = useState([])
  // const [id, setId] = useState(1)
  // useEffect(() => {
  //   axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
  //     .then(res => {
  //       console.log(res.data)
  //       setCards(res.data)
  //     })

  // }, [id])

  // const changeNameHandler = (event, id) => {
  //   const card_copy = { ...card }
  //   card.name = event.target.value
  //   setCards(card_copy)
  // }

  // const classes = ['button']
  //  <Counter /> 
  //  <CounterContext.Provider value={{ counter: state.counter, dispatch }}>
  //         <ComponentA></ComponentA>

  //       </CounterContext.Provider> 
  //  <NameContext.Provider value={'Smith'}>
  //         <ColorContext.Provider value={'blue'}>

  //         </ColorContext.Provider>
  //       </NameContext.Provider>

  // <ThemeProvider theme={theme}>
  //   <div className="App">
  //     <input type="text" value={id} onChange={e => setId(e.target.value)}></input>
  //     <Card
  //       name={card.name}
  //       phone={card.phone}
  //       key={card.id}
  //       onChangeName={(event) => changeNameHandler(event, card.id)}
  //     />
  //   </div>
  // </ThemeProvider>

