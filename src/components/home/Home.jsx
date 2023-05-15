import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { deleteUser } from '../../redux/UserSlice';

const Home = () => {
    const users = useSelector((state) => state.users)
    const dispatch = useDispatch()

    const handleDelete = (id) => {
        dispatch(deleteUser({id}))
    }
    
    return (
        <div className='container mt-5'>
            <h2 className='text-center text-secondary my-5'>CRUD APP Using Redux Toolkit</h2>
            <Link to={`/create`} className='btn btn-success my-3'>Create +</Link>
            <table className='table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((u, i) => (
                            <tr key={i}>
                                <td>{u.id}</td>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>
                                    <Link to={`/update/${u.id}`} className='btn btn-primary me-3'>Edit</Link>
                                    <button onClick={() => handleDelete(u.id)} className='btn btn-danger'>Delete</button>
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Home