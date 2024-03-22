import axios, { AxiosResponse } from "axios";
import { IModule } from "../../Interfaces/module";

const COURSES_API = "http://localhost:4000/api/courses";

export const fetchModulesForCourse = async (courseId: any) => {
    const response: AxiosResponse<IModule[]> = await
        axios.get<IModule[]>(`${COURSES_API}/${courseId}/modules`);
    return response.data;
};
