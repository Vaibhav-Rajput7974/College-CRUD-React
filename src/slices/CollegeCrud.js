import { createSlice, current } from "@reduxjs/toolkit"

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
             console.log('state >>>>>>>>>>>>>>>>>',current(state) );
            state.colleges.push(action.payload);
        }, 
        deleteClg :(state,action)=>{
            const {id}=action.payload;
            state.colleges = state.colleges.filter((item) => item.id !== id);
            
            console.log(state.colleges);
        },
        updateCollege :(state,action)=>{

            const data = action.payload;

            state.colleges = state.colleges.map(obj =>
            obj.id === data.id ? data : obj);
            console.log(current(state));
        },
        addClgInStudents :(state,action)=>{
            const { id, response } = action.payload;
            console.log(response,id);
            const index = state.colleges.findIndex(college => college.id == id);
            console.log(index);
            if(index!==-1){
                state.colleges[index].students.push(response);
            }
        },
        deleteStudentClg: (state,action)=>{

            const { id, response } = action.payload;
            console.log(response,id);
            const index = state.colleges.findIndex(college => college.id == id);
            if(index!==-1){
                state.colleges[index].students = state.colleges[index].students.filter((item) => item.id !== response.id);
            }
        },
        updateStudentClg: (state,action)=>{

            const { id, response } = action.payload;
            console.log(response,id);
            const index = state.colleges.findIndex(college => college.id == id);
            if(index!==-1){
                state.colleges[index].students = state.colleges[index].students.map((item) => item.id === response.id ? response : item);
            }
        },
        

    }
});
export const{getAllCollege,addCollege,deleteClg,updateCollege,addClgInStudents,deleteStudentClg,updateStudentClg} = CollegeCrud.actions;
export default CollegeCrud.reducer;
