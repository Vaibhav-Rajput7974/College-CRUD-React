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
    }
});
export const{getAllCollege,addCollege,deleteClg,updateCollege} = CollegeCrud.actions;
export default CollegeCrud.reducer;
