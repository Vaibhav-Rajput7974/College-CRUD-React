import { configureStore } from "@reduxjs/toolkit";
import CollegeCrud from "./slices/CollegeCrud";

const store=configureStore(
    {
        reducer:{
            AllCollege:CollegeCrud,
        }
    }
)
export default store;