import axios, { AxiosResponse } from "axios";
import { Course } from "../Interfaces/course";

const COURSES_API = "http://localhost:4000/api/courses";

export const fetchCourses = async () => {
    const response: AxiosResponse<Course[]> = await
        axios.get<Course[]>(COURSES_API);

    return response.data;
};

export const addNewCourse = async (course: Course) => {
    const response: AxiosResponse<Course> = await
        axios.post<Course>(COURSES_API, course);

    return response.data;
};

export const deleteCourse = async (courseId: string) => {
    const response = await
        axios.delete(`${COURSES_API}/${courseId}`);

    return response.data;
}

export const updateCourse = async (course: Course) => {
    const response = await
        axios.put(`${COURSES_API}/${course._id}`, course);

    return response.data;
}

export const fetchCourseById = async (courseId?: string) => {
    const response: AxiosResponse<Course> = await
        axios.get<Course>(`${COURSES_API}/${courseId}`);

    return response.data;
};