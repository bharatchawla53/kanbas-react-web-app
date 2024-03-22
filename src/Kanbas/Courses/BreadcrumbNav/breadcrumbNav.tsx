import { HiMiniBars3 } from "react-icons/hi2";
import { FaGlasses } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import { useParams } from "react-router";
import "./breadcrumbNav.css"
import { ICourse } from "../../Interfaces/course";
import { useEffect, useState } from "react";
import * as api from "../api";

function BreadcrumbNav() {

    const { courseId } = useParams();
    const [course, setCourse] = useState<ICourse>();
    const { pathname } = useLocation();
    const pathParts = decodeURIComponent(pathname).split("/");
    const activeBreadcrumb = pathParts[pathParts.length - 1];

    // regex to check if assignment path ends with an ID to show breadcrumb correctly
    const isAssignmentPath = pathname.includes("/Assignments/");
    let idMatch = null;
    let assignmentId = null;
    if (isAssignmentPath) {
        idMatch = pathname.match(/\/([^/]+)$/);
        assignmentId = idMatch ? idMatch[1] : null;
    }

    const findCourseById = async (courseId?: string) => {
        const course = await api.fetchCourseById(courseId);
        setCourse(course);
    };

    useEffect(() => {
        findCourseById(courseId);
    }, [courseId]);


    console.log("activeBreadcrumb:", activeBreadcrumb);
    console.log("isAssignmentPath:", isAssignmentPath);
    console.log("pathname:", pathname);
    console.log("idMatch:", idMatch);
    console.log("assignmentId:", assignmentId);

    return (
        <div className="d-none d-md-block">
            <div className="d-flex align-items-center">
                <HiMiniBars3 size={'2em'} />
                <nav className="custom-breadcrumb" aria-label="breadcrumb">
                    <ol className="breadcrumb m-0 ms-3">
                        {isAssignmentPath && idMatch ? (
                            <>
                                <li className="breadcrumb-item">
                                    <Link to={`/Kanbas/Courses/${course?._id}/Home`}>
                                        {course?.number}{course?.startDate}
                                    </Link>
                                </li>

                                <li className="breadcrumb-item">
                                    <Link to={`/Kanbas/Courses/${course?._id}/Assignments`}>
                                        Assignments
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li className="breadcrumb-item">
                                <Link to={`/Kanbas/Courses/${course?._id}/Home`}>
                                    {course?.number}{course?.startDate}
                                </Link>
                            </li>
                        )}

                        <li className="breadcrumb-item active" aria-current="page">
                            {assignmentId ? assignmentId : activeBreadcrumb}
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
        </div>
    );
}

export default BreadcrumbNav;