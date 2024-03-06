export interface Assignment {
    _id: string;
    title: string;
    course: string;
    dueDate: string;
    dueTime: string;
    points: number;
    description: string;
    availableFrom: string;
    availableUntil: string;
}