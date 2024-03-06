import { configureStore } from "@reduxjs/toolkit";
import { Module } from "../Interfaces/module";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentReducer from "../Courses/Assignments/assignmentsReducer";
import { Assignment } from "../Interfaces/assignment";

export interface KanbasState {
    modulesReducer: {
        modules: Module[];
        module: Module;
    };

    assignmentReducer: {
        assignments: Assignment[];
        assignment: Assignment;
    };
}
const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentReducer
    }
});


export default store;