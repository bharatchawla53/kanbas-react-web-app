import { Lesson } from "./lesson";

export interface Module {
    _id: string;
    name: string;
    description: string;
    course: string;
    lessons: Lesson[];
}
