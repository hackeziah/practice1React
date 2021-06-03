import React from 'react'
import ComponentB from './ComponentB'
import { NameContext } from '../App'
import { ColorContext } from '../App'

const alignment = {
    color: 'pink'
}
const ComponentC = () => {
    return (
        <div style={alignment}>
            <div>Component C</div>
            <NameContext.Consumer>
                {
                    name => {
                        return (
                            <ColorContext.Consumer>
                                {color => (
                                    <div>{name}, {color}</div>
                                )}
                            </ColorContext.Consumer>
                        )
                    }
                }
            </NameContext.Consumer>
        </div>
    )
}

export default ComponentC
