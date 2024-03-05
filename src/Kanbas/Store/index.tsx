import { configureStore } from "@reduxjs/toolkit";
import { Module } from "../Interfaces/module";
import modulesReducer from "../Courses/Modules/modulesReducer";

export interface KanbasState {
    modulesReducer: {
        modules: Module[];
        module: Module;
    };
}
const store = configureStore({
    reducer: {
        modulesReducer
    }
});


export default store;