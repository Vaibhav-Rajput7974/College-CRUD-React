import { createSlice } from "@reduxjs/toolkit"

const intialState={
    singelClg:[]
}

const StudentCrud=createSlice({
    name:"StudentCrud",
    initialState:intialState,
    reducers:{
        getStudents :(state,action)=>{
            console.log(action.payload);
            state.singelClg = action.payload;
        },
        deleteStudents :(state,action)=>{

            const {id}=action.payload;
            state.singelClg = state.singelClg.students.filter((item) => item.id !== id);
        },
        addStudents:(state,action)=>{
            state.singelClg = action.payload;
        },
        updateStudets:(state,action)=>{
            state.singelClg = action.payload;
        }
    }
});
export const{getStudents,deleteStudents,addStudents,updateStudets} = StudentCrud.actions;
export default StudentCrud.reducer;
