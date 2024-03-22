import axios, { AxiosResponse } from "axios";
import { ICourse } from "../Interfaces/course";

const COURSES_API = "http://localhost:4000/api/courses";

export const fetchCourses = async () => {
    const response: AxiosResponse<ICourse[]> = await
        axios.get<ICourse[]>(COURSES_API);

    return response.data;
};

export const addNewCourse = async (course: ICourse) => {
    const response: AxiosResponse<ICourse> = await
        axios.post<ICourse>(COURSES_API, course);

    return response.data;
};

export const deleteCourse = async (courseId: string) => {
    const response = await
        axios.delete(`${COURSES_API}/${courseId}`);

    return response.data;
}

export const updateCourse = async (course: ICourse) => {
    const response = await
        axios.put(`${COURSES_API}/${course._id}`, course);

    return response.data;
}

export const fetchCourseById = async (courseId?: string) => {
    const response: AxiosResponse<ICourse> = await
        axios.get<ICourse>(`${COURSES_API}/${courseId}`);

    return response.data;
};