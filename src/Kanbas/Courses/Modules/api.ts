import axios, { AxiosResponse } from "axios";
import { IModule } from "../../Interfaces/module";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const MODULES_API = `${API_BASE}/api/modules`;

export const fetchModulesForCourse = async (courseId: any) => {
    const response: AxiosResponse<IModule[]> = await
        axios.get<IModule[]>(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};

export const createModule = async (courseId: string, module: IModule) => {
    const response: AxiosResponse<IModule> = await
        axios.post<IModule>(`${COURSES_API}/${courseId}/modules`, module);
    return response.data;
}

export const deleteModule = async (moduleId: string) => {
    const response = await
        axios.delete(`${MODULES_API}/${moduleId}`);
    return response.data;
};

export const updateModule = async (module: IModule) => {
    const response = await
        axios.put<IModule>(`${MODULES_API}/${module._id}`, module);
    return response.data;
};

