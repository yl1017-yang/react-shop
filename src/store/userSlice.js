import { createSlice } from '@reduxjs/toolkit'

let user = createSlice({  //useStat()역할임
  name : 'user',
  // initialState : 'kim',
  initialState : { name : 'kim', age : 20 },
  reducers : {
    changeName(state){
      // return 'john ' + state
      // return { name : 'park', age : 20 }
      state.name = 'park'
    },
    increase(state, action){
      state.age += action.payload
    }
  }
})

export let {changeName, increase} = user.actions

export default user