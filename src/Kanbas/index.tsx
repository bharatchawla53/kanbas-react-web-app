import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import React, { useEffect, useState } from "react";
import store from "./Store";
import { Provider } from "react-redux";
import { ICourse } from "./Interfaces/course";
import * as api from "./Courses/api";

function Kanbas() {

    const [courses, setCourses] = useState<ICourse[]>([]);

    const [course, setCourse] = useState({
        _id: "0",
        name: "New Course",
        number: "New Number",
        courseText: "New Course",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg"
    });

    const addNewCourse = async () => {
        const newCourse = await api.addNewCourse(course);
        setCourses([...courses, newCourse]);
    };

    const deleteCourse = async (courseId: string) => {
        const response = await api.deleteCourse(courseId);
        setCourses(courses.filter((course) => course._id != courseId));
    }

    const updateCourse = async () => {
        const response = await api.updateCourse(course);
        setCourses(courses.map((c) => {
            if (c._id === course._id) {
                return course;
            } else {
                return c;
            }
        }))
    }

    const findAllCourses = async () => {
        const courses = await api.fetchCourses();
        setCourses(courses);
    };

    useEffect(() => {
        findAllCourses();
    }, []);

    return (
        <Provider store={store}>
            <div className="d-flex flex-row">
                <KanbasNavigation />
                <div style={{ flexGrow: 1 }}>
                    <Routes>
                        <Route path="/" element={<Navigate to="Dashboard" />} />
                        <Route path="Account/*" element={<Account />} />
                        <Route path="Dashboard" element={
                            <Dashboard
                                courses={courses}
                                course={course}
                                setCourse={setCourse}
                                addNewCourse={addNewCourse}
                                deleteCourse={deleteCourse}
                                updateCourse={updateCourse}
                            />}
                        />
                        <Route path="Courses/:courseId/*" element={
                            <Courses />}
                        />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;