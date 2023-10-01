import { createSlice } from "@reduxjs/toolkit"

const intialState={
}

const CollegeCrud=createSlice({
    name:"CollegeCrud",
    initialState:intialState,
    reducers:{
        getAllCollege:(state,action)=>{
            state.colleges=action.payload;
        },
        addCollege:(state,action)=>{
             console.log(action.payload);
            state.colleges.push(action.payload);
        },
        deleteClg :(state,action)=>{
            console.log(action.payload);
            state.colleges = state.colleges.filter(item => item.id !== action.payload);
        },
        getClgById :(state,action)=>{
            console.log(action.payload);
            state.colleges = state.colleges.filter(item => item.id === action.payload);
        }

    }
});
export const{getAllCollege,addCollege,deleteClg,getClgById} = CollegeCrud.actions;
export default CollegeCrud.reducer;
