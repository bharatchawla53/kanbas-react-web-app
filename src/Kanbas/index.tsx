import KanbasNavigation from "./Navigation";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";
import Courses from "./Courses";
import Account from "./Account";
import { courses as dbCourses } from './Database';
import React, { useState } from "react";
import store from "./Store";
import { Provider } from "react-redux";
import { Course } from "./Interfaces/course";

function Kanbas() {

    const [courses, setCourses] = useState<Course[]>(dbCourses);

    const [course, setCourse] = useState({
        _id: "0",
        name: "New Course",
        number: "New Number",
        courseText: "New Course",
        startDate: "2023-09-10",
        endDate: "2023-12-15",
        image: "/images/reactjs.jpg"
    });

    const addNewCourse = () => {
        const newCourse = { ...course, _id: new Date().getTime().toString() };
        setCourses([...courses, { ...course, ...newCourse }]);
    };

    const deleteCourse = (courseId: string) => {
        setCourses(courses.filter((course) => course._id != courseId));
    }

    const updateCourse = () => {
        setCourses(courses.map((c) => {
            if (c._id === course._id) {
                return course;
            } else {
                return c;
            }
        }))
    }

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
                            <Courses courses={courses} />}
                        />
                    </Routes>
                </div>
            </div>
        </Provider>
    );
}
export default Kanbas;