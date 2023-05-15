import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addUser } from '../../redux/UserSlice'
import { useNavigate } from 'react-router-dom'

const Create = () => {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('') 

    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addUser({id: users[users.length - 1].id + 1, name, email}))
        navigate(`/`)
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="shadow w-50 bg-light  p-5">
            <form onSubmit={handleSubmit}>
                <h3 className='text-center'>Add New User</h3>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type='text' value={name} name='name' className='form-control' placeholder='Enter your name' onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="name">Email: </label>
                    <input type='email' value={email} name='email' className='form-control' placeholder='Enter your email' onChange={e => setEmail(e.target.value)}/>
                </div>
                <br />
                <button className="btn-primary btn w-100 text-white">Submit</button>
            </form>
        </div>
    </div>
  )
}

export default Create