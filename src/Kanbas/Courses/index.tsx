import { useParams } from "react-router";
import { courses } from "../Database";
import { HiMiniBars3 } from "react-icons/hi2";
import { Link } from "react-router-dom";
import "./index.css"

function Courses() {

    const { courseId } = useParams();
    const course = courses.find((course) => course._id === courseId);

    // TODO make breadcrumb responsive refer to the old code
    return (
        <div className="course-main">
            <div className="d-flex align-items-center">
                <HiMiniBars3 size={'2em'} />
                <nav>
                    <ol className="breadcrumb m-0 ms-3">
                        <li className="breadcrumb-item">
                            <Link to={`/Kanbas/Courses/${course?._id}/Home`}>
                                {course?.number}{course?.startDate}
                            </Link>
                        </li>
                    </ol>
                </nav>
            </div>
            <hr />
        </div>
    );
}

export default Courses