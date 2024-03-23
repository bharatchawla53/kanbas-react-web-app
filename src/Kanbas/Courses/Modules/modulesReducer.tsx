import { createSlice } from "@reduxjs/toolkit";
import { IModule } from "../../Interfaces/module";

interface InitialState {
    modules: IModule[],
    module: IModule;
}

const initialState: InitialState = {
    modules: [],
    module: {
        _id: "",
        course: "",
        name: "New Module",
        description: "New Description",
    }
};

const modulesSlice = createSlice({
    name: "modules",
    initialState,
    reducers: {
        setModules: (state, action) => {
            state.modules = action.payload;
        },
        addModule: (state, action) => {
            state.modules = [
                { ...action.payload, _id: new Date().getTime().toString() },
                ...state.modules,
            ];
        },
        deleteModule: (state, action) => {
            state.modules = state.modules.filter(
                (module) => module._id !== action.payload
            );
        },
        updateModule: (state, action) => {
            state.modules = state.modules.map((module) => {
                if (module._id === action.payload._id) {
                    return action.payload;
                } else {
                    return module;
                }
            });
        },
        setModule: (state, action) => {
            state.module = action.payload;
        },
        resetModuleForm: (state) => {
            state.module._id = "";
            state.module.course = "";
            state.module.name = "New Module";
            state.module.description = "New Module Description";
            state.module.lessons = [];
        },
    },
});


export const { setModules, addModule, deleteModule, updateModule, setModule, resetModuleForm } = modulesSlice.actions;
export default modulesSlice.reducer;
