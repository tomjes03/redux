import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, reset } from '../../redux/CounterSlice'

const Counter = () => {

    const {count} = useSelector((state) => state.counter)
    const dispatch = useDispatch()

    return (
        <div className='mt-5'>
            <h1 className='text-center'>{count}</h1>
          <div className='d-flex justify-content-center'>
            <button
                className='btn btn-success'
                aria-label="Increment value"
                onClick={() => dispatch(increment())}
            >
              Increment
            </button>
            <button
                className='btn btn-secondary m-3'
                aria-label="Decrement value"
                onClick={() => dispatch(reset())}
            >
              Reset
            </button>
            
            <button
                className='btn btn-danger'
                aria-label="Decrement value"
                onClick={() => dispatch(decrement())}
            >
              Decrement
            </button>
          </div>
        </div>
      )
}

export default Counter