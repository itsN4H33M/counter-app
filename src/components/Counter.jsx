import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, incrementByAmount, reset } from '../redux/counterSlice'

function Counter() {
    const [amount, setAmount] = useState("")

    const handleIncrement = () => {
        if (amount) {
            dispatch(incrementByAmount(Number(amount)))
        }
        else {
            alert("Please Enter the number")
        }
    }

    const dispatch = useDispatch()
    const count = useSelector((state) => state.counter.count)

    return (
        <div style={{ height: '70vh' }} className='d-flex justify-content-center align-items-center'>
            <div className='d-flex justify-content-center align-items-center border border-2 rounded w-50 p-5 flex-column'>
                <h1 style={{ fontSize: '100px' }}>{count}</h1>
                <div>
                    <button onClick={() => dispatch(decrement())} className='btn btn-warning m-1'>Decrement</button>
                    <button onClick={() => dispatch(reset())} className='btn btn-danger m-1'>Reset</button>
                    <button onClick={() => dispatch(increment())} className='btn btn-success m-1'>Increment</button>
                </div>
                <div className='d-flex justify-content-center align-items-center mt-3'>
                    <input className='form-control me-2' type="text" placeholder='Amount to be incremented' onChange={(e) => setAmount(e.target.value)} />
                    <button className='btn btn-primary' onClick={handleIncrement}>Set</button>
                </div>
            </div>
        </div>
    )
}

export default Counter