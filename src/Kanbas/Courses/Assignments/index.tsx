import { Link, useParams } from "react-router-dom";
import { assignments } from "../../Database";
import { FaCheckCircle, FaEllipsisV, FaPlus, FaSortDown } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import "./index.css";
import "./../../style.css";

function Assignments() {

    // declaring interface to enforce structure for json
    interface Assignment {
        _id: String;
        title: String;
        course: String;
        dueDate: String;
        dueTime: String;
        points: Number
    }

    const { courseId } = useParams();
    const assignmentList: Assignment[] = assignments.filter((assignment) => assignment.course === courseId);

    return (
        <div className="container-fluid d-flex flex-row me-5">
            <div className="col-12 d-flex flex-column mx-4">
                <div className="d-flex mb-1 justify-content-between">
                    <div className="search-assignment">
                        <input type="text" className="form-control" placeholder="Search for Assignments" />
                    </div>

                    <div className="float-end">
                        <button className="btn btn-outline-secondary me-1 custom-btn" type="button">
                            <FaPlus className="me-1 custom-icon" />
                            Group
                        </button>
                        <button className="btn btn-danger me-1 custom-btn" type="button">
                            <FaPlus className="me-1 custom-icon" />
                            Assignment
                        </button>
                        <button className="btn btn-outline-secondary me-1 custom-btn" type="button">
                            <FaEllipsisV className="custom-icon" />
                        </button>
                    </div>
                </div>
                <hr />
                <div className="list-group p-0 mb-5 rounded-0">
                    <div className="d-flex list-group-item">
                        <div className="d-flex align-items-center">
                            <FaEllipsisV />
                            <FaEllipsisV className="no-spacing-ellipsis" />
                            <FaSortDown className="sort-down" />
                        </div>
                        <div className="me-auto assignment-header">
                            <span>Assignments</span>
                        </div>
                        <div className="d-flex align-items-center">
                            <div className="rounded-pill border border-dark-subtle me-2">
                                <span className="mx-3 ">40% of Total</span>
                            </div>
                            <FaPlus className="me-3" />
                            <FaEllipsisV />
                        </div>
                    </div>

                    {assignmentList.map((assignment, index) => (
                        <div className="d-flex list-group-item align-items-center selected">
                            <div className="d-flex align-items-center">
                                <FaEllipsisV />
                                <FaEllipsisV className="no-spacing-ellipsis" />
                            </div>
                            <div className="ms-3">
                                <FaPenToSquare className="green-icon" />
                            </div>
                            <div className="d-flex flex-column ms-3 me-auto">
                                <Link to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}>
                                    {assignment.title}
                                </Link>
                                <div className="multiple-modules">
                                    <Link to={`/Kanbas/Courses/${courseId}/Modules`}>
                                        Multiple Modules
                                    </Link>
                                    &nbsp; |
                                    <strong> Due </strong>
                                    {assignment.dueDate} at {assignment.dueTime} &nbsp; | {assignment.points + ""} pts
                                </div>
                            </div>
                            <div className="d-flex align-items-center float-end">
                                <FaCheckCircle className="me-2 green-icon" />
                                <FaEllipsisV />
                            </div>
                        </div>
                    ))}

                </div>
            </div>
        </div>

    );
}

export default Assignments