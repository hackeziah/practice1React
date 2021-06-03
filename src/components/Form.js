import React, { useState } from 'react'

const Form = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const submitHandler = (e) => {
        e.prevertDefault();
        alert(`The name is ${name} and email is ${email}`)
        setName('')
        setEmail('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>Name</label>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" value={email} onChange={e => setEmail(e.target.value)} />
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Form
