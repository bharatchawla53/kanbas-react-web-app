import { configureStore } from "@reduxjs/toolkit";
import { IModule } from "../Interfaces/module";
import modulesReducer from "../Courses/Modules/modulesReducer";
import assignmentReducer from "../Courses/Assignments/assignmentsReducer";
import { IAssignment } from "../Interfaces/assignment";

export interface KanbasState {
    modulesReducer: {
        modules: IModule[];
        module: IModule;
    };

    assignmentReducer: {
        assignments: IAssignment[];
        assignment: IAssignment;
    };
}
const store = configureStore({
    reducer: {
        modulesReducer,
        assignmentReducer
    }
});


export default store;