import { ILesson } from "./lesson";

export interface IModule {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons?: ILesson[];
}
