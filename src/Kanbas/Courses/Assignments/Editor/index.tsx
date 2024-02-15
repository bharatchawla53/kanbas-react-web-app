import { useNavigate, useParams, Link } from "react-router-dom";
import { assignments } from "../../../Database";
import { FaCheckCircle, FaEllipsisV, FaPlus } from "react-icons/fa";
import "./../../../style.css";
import "./index.css";

function AssignmentEditor() {
    const { assignmentId, courseId } = useParams();
    const navigate = useNavigate();
    const assignment = assignments.find((assignment) => assignment._id === assignmentId);

    // save function to return back to assignments list
    const handleSave = () => {
        console.log("Actually saving assignment TBD in later assignments.");
        navigate(`/Kanbas/Courses/${courseId}/Assignments`);
    }

    return (
        <div className="container-fluid d-flex flex-column">
            <div className="d-flex flex-row align-items-center ms-auto">
                <div className="me-4">
                    <FaCheckCircle className="me-1 mb-1 circle-check" />
                    Published
                </div>
                <button className="btn btn-outline-secondary editor-ellipsis" type="button">
                    <FaEllipsisV />
                </button>
            </div>
            <hr />
            <form>
                <div className="mb-3  align-items-center">
                    <label htmlFor="assignment-name" className="form-label">
                        Assignment Name
                    </label>
                    <input type="text" className="form-control" value={assignment?.title} placeholder="Assignment Name" />
                </div>

                <div className="mb-3 align-items-center">
                    <textarea cols={30} rows={5} className="form-control">This assignment desribes how to install the development environment for creating and working with web applications we will be developing this semester. We will add new content every week, pushing the code to a GitHub source repository, and then deploying the content to a remote server hosted on Netlify.
                    </textarea>
                </div>

                <div className="row mb-3  align-items-center">
                    <label className="col-4 col-form-label text-end">Points</label>
                    <div className="col-6">
                        <input type="text" className="form-control" value={assignment?.points} />
                    </div>
                </div>

                <div className="row mb-3  align-items-center">
                    <label className="col-4 col-form-label text-end">Assignment Group</label>
                    <div className="col-6">
                        <select className="form-select">
                            <option selected>ASSIGNMENTS</option>
                            <option>QUIZZES</option>
                            <option>EXAMS</option>
                            <option>PROJECT</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3  align-items-center">
                    <label className="col-4 col-form-label text-end">Display Grade as</label>
                    <div className="col-6">
                        <select className="form-select">
                            <option selected>Percentage</option>
                            <option>Points</option>
                            <option>Complete/Incomplete</option>
                            <option>Letter Grade</option>
                        </select>
                    </div>
                </div>

                <div className="row mb-3  align-items-center">
                    <div className="col-4"></div>
                    <div className="col-6">
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" />
                            <label className="form-check-label">
                                Do not count this assignment towards the final grade
                            </label>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4  col-form-label text-end">Submission Type</div>
                    <div className="col-6">
                        <div className="d-flex border rounded">
                            <div className="col-7 m-4">
                                <select className="form-select mb-4">
                                    <option selected>Online</option>
                                    <option>Website Url</option>
                                    <option>File Upload</option>
                                </select>
                                <div className="mb-4">
                                    <h6>Online Entry Options</h6>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" checked />
                                    <label className="form-check-label">Text Entry</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Website URL</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" checked />
                                    <label className="form-check-label">Media Recordings</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">Student Annotation</label>
                                </div>
                                <div className="form-check mb-3">
                                    <input className="form-check-input" type="checkbox" />
                                    <label className="form-check-label">File Uploads</label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row mb-3">
                    <div className="col-4  col-form-label text-end">Assign</div>
                    <div className="col-6">
                        <div className="d-flex border rounded">
                            <div className="col-7 m-4">
                                <div className="mb-4">
                                    <h6>Assign to</h6>
                                    <input type="text" className="form-control" value="Everyone" />
                                </div>
                                <div className="mb-4">
                                    <h6>Due</h6>

                                    <div className="input-group">
                                        <input type="text" className="form-control" value="Sep 18, 2023, 11:59 PM" />
                                        <i className="input-group-text fa-regular fa-calendar-days"></i>
                                    </div>
                                </div>
                                <div className="d-flex">
                                    <div className="mr-4">
                                        <h6>Available From</h6>
                                        <div className="input-group">
                                            <input type="text" className="form-control" value="Sep 18, 2023, 11:59 PM" />
                                            <i className="input-group-text fa-regular fa-calendar-days"></i>
                                        </div>
                                    </div>
                                    <div className="ms-3">
                                        <h6>Until</h6>
                                        <div className="input-group">
                                            <input type="text" className="form-control" value="Sep 18, 2023, 11:59 PM" />
                                            <i className="input-group-text fa-regular fa-calendar-days"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button className="btn btn-outline-secondary btn-add-row" type="button">
                            <FaPlus className="plus-icon" />
                            Add
                        </button>
                    </div>
                </div>

                <hr />

                <div className="d-flex flex-row">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" />
                        <label className="form-check-label">
                            Notify users that this content has changed
                        </label>
                    </div>
                    <div className="ms-auto">
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments`} className="btn btn-outline-secondary me-1">Cancel</Link>
                        <button className="btn btn-danger me-1" onClick={handleSave}>Save</button>
                    </div>
                </div>
            </form>
        </div>
    );
}

export default AssignmentEditor;