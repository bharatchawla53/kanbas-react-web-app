import { useParams } from "react-router";
import { courses } from "../Database";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaGlasses } from "react-icons/fa";
import { Link, useLocation, Navigate, Route, Routes } from "react-router-dom";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import "./index.css"
import Home from "./Home";
import Assignments from "./Assignments";

function Courses() {

    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    const { pathname } = useLocation();
    const pathParts = decodeURIComponent(pathname).split("/");
    const activeBreadcrumb = pathParts[pathParts.length - 1];

    // TODO make breadcrumb responsive refer to the old code
    return (
        <div className="course-main">
            <div className="d-flex align-items-center">
                <HiMiniBars3 size={'2em'} />
                <nav className="custom-breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb m-0 ms-3">
                        <li className="breadcrumb-item">
                            <Link to={`/Kanbas/Courses/${course?._id}/Home`}>
                                {course?.number}{course?.startDate}
                            </Link>
                        </li>
                        <li className="breadcrumb-item active" aria-current="page">
                            {activeBreadcrumb}
                        </li>
                    </ol>
                </nav>
                <div className="ms-auto float-end">
                    <a href="" className="btn btn-outline-secondary ellipsis">
                        <FaGlasses className="fa-glasses" />
                        Student View
                    </a>
                </div>
            </div>
            <hr />

            <div className="d-flex flex-row">
                <CourseNavigation />

                <div className="course-routes">
                    <Routes>
                        <Route path="/" element={<Navigate to="Home" />} />
                        <Route path="Home" element={<Home />} />
                        <Route path="Modules" element={<Modules />} />
                        <Route path="Piazza" element={<h1>Piazza</h1>} />
                        <Route path="Zoom Meetings" element={<h1>Zoom Meetings</h1>} />
                        <Route path="Assignments" element={<Assignments />} />
                        <Route path="Quizzes" element={<h1>Quizzes</h1>} />
                        <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
                        <Route path="Grades" element={<h1>Grades</h1>} />
                        <Route path="People" element={<h1>People</h1>} />
                        <Route path="Panopto Video" element={<h1>Panopto Video</h1>} />
                        <Route path="Discussions" element={<h1>Discussions</h1>} />
                        <Route path="Announcements" element={<h1>Announcements</h1>} />
                        <Route path="Pages" element={<h1>Pages</h1>} />
                        <Route path="Files" element={<h1>Files</h1>} />
                        <Route path="Rubrics" element={<h1>Rubrics</h1>} />
                        <Route path="Outcomes" element={<h1>Outcomes</h1>} />
                        <Route path="Colloborations" element={<h1>Colloborations</h1>} />
                        <Route path="Syllabus" element={<h1>Syllabus</h1>} />
                        <Route path="Settings" element={<h1>Settings</h1>} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

export default Courses