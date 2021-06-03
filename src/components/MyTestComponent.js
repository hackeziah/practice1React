import React, { useState, useRef, useEffect } from 'react'

const MyTestComponent = () => {
    const [count, setCount] = useState(0);
    const componentRef = useRef(true);

    useEffect(() => {

        return () => {
            componentRef.current = false
        }
    }, [])

    const fakefetch = () => {
        setTimeout(() => {
            if (componentRef.current)
                setCount(count + 1)
        }, 2000);
    }
    return (
        <div>
            <h1>Counter: {count} </h1>
            <button onClick={fakefetch}>Pindotan</button>
        </div>
    )
}
export default MyTestComponent;