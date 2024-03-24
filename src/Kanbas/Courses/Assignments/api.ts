import axios, { AxiosResponse } from "axios";
import { IAssignment } from "../../Interfaces/assignment";

const API_BASE = process.env.REACT_APP_API_BASE;
const COURSES_API = `${API_BASE}/api/courses`;
const ASSIGNMENT_API = `${API_BASE}/api/assignments`;

export const fetchAssignmentsForCourse = async (courseId: any) => {
    const response: AxiosResponse<IAssignment[]> = await
        axios.get<IAssignment[]>(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};

export const createAssignment = async (courseId: any, assignment: IAssignment) => {
    const response: AxiosResponse<IAssignment> = await
        axios.post<IAssignment>(`${COURSES_API}/${courseId}/assignments`, assignment);
    return response.data;
};

export const deleteAssignment = async (assignmentId: string) => {
    const response = await
        axios.delete(`${ASSIGNMENT_API}/${assignmentId}`);
    return response.data;
};

export const updateAssignment = async (assignment: IAssignment) => {
    console.log(assignment);
    const response = await
        axios.put<IAssignment>(`${ASSIGNMENT_API}/${assignment._id}`, assignment);
    return response.data;
};
