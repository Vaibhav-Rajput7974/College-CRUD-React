import { createSlice } from "@reduxjs/toolkit"

const intialState={
}

const StudentCrud=createSlice({
    name:"StudentCrud",
    initialState:intialState,
    reducers:{
        getAllStudents:(state,action)=>{
            state.students=action.payload;
        },
    }
});
export const{getAllStudents} = StudentCrud.actions;
export default StudentCrud.reducer;
