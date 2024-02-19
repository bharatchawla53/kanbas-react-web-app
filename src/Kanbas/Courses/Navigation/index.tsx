import { Link, useLocation } from "react-router-dom";
import "./index.css";

function CourseNavigation() {
    const links = ["Home", "Modules", "Piazza", "Zoom Meetings", "Assignments", "Quizzes",
        "Grades", "People", "Panopto Video", "Discussions", "Announcements", "Pages", "Files",
        "Rubrics", "Outcomes", "Colloborations", "Syllabus", "Settings"];

    const { pathname } = useLocation();

    return (
        <div id="course-nav-sidebar" className="d-none d-lg-block">

            <span id="section-tabs-header-subtitle" className="ellipsis">
                202430_2 Spring 2024 Semester Full Term Grad
            </span>

            <ul>
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link) ? "active" : ""} >
                        <Link to={link}>{link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default CourseNavigation