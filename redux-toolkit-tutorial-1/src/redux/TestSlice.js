import { createSlice } from '@reduxjs/toolkit'
const testSlice = createSlice({
    name: 'counter',
    initialState: 'test2',
    reducers: {
        test2: (state,action) => {
            console.log(action.payload)
            return action.payload
        }
    }
})

export const { test2 }  = testSlice.actions

export default testSlice.reducer