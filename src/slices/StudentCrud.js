import { createSlice } from "@reduxjs/toolkit"

const intialState={
}

const StudentCrud=createSlice({
    name:"StudentCrud",
    initialState:intialState,
    reducers:{
        getStudents :(state,action)=>{
            state.college = action.payload;
        },
        deleteStudents :(state,action)=>{
            state.colleges = state.colleges.filter(item => item.id !== action.payload);
        }
    }
});
export const{getStudents,deleteStudents} = StudentCrud.actions;
export default StudentCrud.reducer;
