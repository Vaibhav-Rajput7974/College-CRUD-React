import { configureStore } from "@reduxjs/toolkit";
import CollegeCrud from "./slices/CollegeCrud";
import StudentCrud from "./slices/StudentCrud";

const store=configureStore(
    {
        reducer:{
            AllCollege:CollegeCrud,
            AllStudent:StudentCrud,
        }
    }
)
export default store;