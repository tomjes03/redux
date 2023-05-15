import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { updateUser } from '../../redux/UserSlice'


const Update = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const {id} = useParams()
  const users = useSelector((state) => state.users) 
  
  // eslint-disable-next-line eqeqeq
  const exisitingUser = users.filter((f) => f.id == id)
  const {name, email} = exisitingUser[0];

  const [updateName, setUpdateName] = useState(name)
  const [updateEmail, setUpdateEmail] = useState(email)

  const handleUpdate = (e) => {
    e.preventDefault()
    dispatch(updateUser({id : id , name: updateName,email: updateEmail}))
    navigate(`/`)
  }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
        <div className="shadow w-50 bg-light  p-5">
            <form onSubmit={handleUpdate}>
                <h3 className='text-center'>Update User</h3>
                <div>
                    <label htmlFor="name">Name: </label>
                    <input type='text' value={updateName} onChange={e => setUpdateName(e.target.value)} name='name' className='form-control' placeholder='Enter your name'  />
                </div>
                <div>
                    <label htmlFor="name">Email: </label>
                    <input type='email' value={updateEmail} onChange={e => setUpdateEmail(e.target.value)} name='email' className='form-control' placeholder='Enter your email' />
                </div>
                <br />
                <button className="btn-primary btn w-100 text-white">Update</button>
            </form>
        </div>
    </div>
  )
}

export default Update