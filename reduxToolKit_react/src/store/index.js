import { configureStore, createSlice } from '@reduxjs/toolkit';

const counterSice = createSlice(
  {
   name:'counter',
   initialState:{counterVal:0},
   reducers:{
    increment:(state,action)=>{
      console.log(state,action)
    },
    decrement:(state,action)=>{
      console.log(state,action)

    }

   }
  }
)



const counterStore = configureStore({reducer :{}});

export default counterStore;
