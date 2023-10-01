import { createSlice } from "@reduxjs/toolkit"

const intialState={
    colleges: []
}

const CollegeCrud=createSlice({
    name:"CollegeCrud",
    initialState:intialState,
    reducers:{
        getAllCollege:(state,action)=>{
            state.colleges=action.payload;
        },
        addCollege:(state,action)=>{
            //  console.log(action.payload);
            state.colleges.push(action.payload);
        }, 
        deleteClg :(state,action)=>{
            // console.log('????, ', state, '><<<<<< >>>>',action)
            state.colleges = state.colleges.filter(item => item.id !== action.payload);
        }, 
        addStudents:(state,action)=>{
           state.colleges.map(item => item.id === action.payload.id?item=action.payload:null)
          
        }
        
    }
});
export const{getAllCollege,addCollege,deleteClg,addStudents} = CollegeCrud.actions;
export default CollegeCrud.reducer;
