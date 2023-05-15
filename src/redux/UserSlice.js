import { createSlice } from '@reduxjs/toolkit'
import { userList } from '../Data'


export const UserSlice = createSlice({
  name: 'users',
  initialState: userList,
  reducers: {
    addUser: (state, action) => {
        state.push(action.payload)
    },
    updateUser: (state, action) => {
      const {id, name, email} = action.payload
      // eslint-disable-next-line eqeqeq
      const updatedUser = state.find(user => user.id == id)
      if(updatedUser){
        updatedUser.name = name
        updatedUser.email = email
      }
    },
    deleteUser: (state, action) => {
      const {id} = action.payload
      // eslint-disable-next-line eqeqeq
      const updatedUser = state.find(user => user.id == id)
      if(updatedUser){
        return state.filter(user => user.id !== id)
      }
    }
  },
})

// Action creators are generated for each case reducer function
export const { addUser, updateUser, deleteUser } = UserSlice.actions

export default UserSlice.reducer