import React, { useEffect } from 'react'

let renderCount = 1

const MyComponentA = (props) => {
    useEffect(() => {
        renderCount++
    })
    return (
        <div>
            <h2>Render COunter {renderCount}</h2> || Counter {props.count}
        </div>
    )
}

export default MyComponentA
