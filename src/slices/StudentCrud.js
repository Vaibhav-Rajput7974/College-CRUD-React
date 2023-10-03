import { createSlice, current } from "@reduxjs/toolkit"
import { act } from "react-dom/test-utils";

const intialState={
    students:[]
}

const StudentCrud=createSlice({
    name:"StudentCrud",
    initialState:intialState,
    reducers:{
        getStudents :(state,action)=>{
            const {students} = action.payload;
            state.students = students;
        },
        deleteStudents :(state,action)=>{
            console.log('////////',action.payload);
            const {id}=action.payload;
            state.students = state.students.filter((item) => item.id !== id);

        },
        addStudents:(state,action)=>{
            state.students.push(action.payload);
        },
        updateStudets:(state,action)=>{
            const data = action.
            payload;

            state.students = state.students.map(obj =>
            obj.id === data.id ? data : obj);
            console.log(current(state));
        }
    }
});
export const{getStudents,deleteStudents,addStudents,updateStudets} = StudentCrud.actions;
export default StudentCrud.reducer;
