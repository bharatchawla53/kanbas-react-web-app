import { FaFileImport, FaFileExport, FaFilter } from "react-icons/fa";
import { FaMagnifyingGlass, FaArrowRightFromBracket } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";
import { useParams } from "react-router-dom";
import { assignments, enrollments, grades, users } from "../../Database";
import { useState } from "react";
import "./index.css"
import { IAssignment } from "../../Interfaces/assignment";
import { IEnrollment } from "../../Interfaces/enrollment";

function Grades() {

    const { courseId } = useParams();
    const assignment: IAssignment[] = assignments.filter((assignment) => assignment.course === courseId);
    const enrollment: IEnrollment[] = enrollments.filter((enrollment) => enrollment.course === courseId);

    // use state if grade input field is selected
    const [selectedGradeId, setSelectedGradeId] = useState('');

    const handleInputClick = (gradeId: string) => {
        setSelectedGradeId(gradeId);
    }

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log("This will be handled later in future assignments.")
    }

    return (
        <div className="container-fluid d-flex flex-column mx-4 mt-1">
            <div className="d-flex flex-row align-items-center ms-auto mb-3">
                <button className="btn btn-outline-secondary me-1 grades-btn" type="button">
                    <FaFileImport className="grades-icon" />
                    Import
                </button>
                <div className="dropdown">
                    <button className="btn btn-outline-secondary dropdown-toggle me-1 grades-btn" data-bs-toggle="dropdown" type="button">
                        <FaFileExport className="grades-icon" />
                        Export
                    </button>
                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="#">Export Current Gradebook View</a></li>
                        <li><a className="dropdown-item" href="#">Export Entire Gradebook</a></li>
                    </ul>
                </div>
                <button className="btn btn-outline-secondary me-4 grades-btn" type="button">
                    <FaGear className="grades-icon" />
                </button>
            </div>

            <form>
                <div className="d-flex">
                    <div className="col me-3">
                        <h6>Student Names</h6>
                        <div className="input-group">
                            <span className="input-group-text">
                                <FaMagnifyingGlass />
                            </span>
                            <input type="text" className="form-select border-start-0" placeholder="Search Students" />
                        </div>
                    </div>
                    <div className="col me-4">
                        <h6>Assignment Names</h6>
                        <div className="input-group">
                            <span className="input-group-text">
                                <FaMagnifyingGlass />
                            </span>
                            <input type="text" className="form-select border-start-0" placeholder="Search Assignments" />
                        </div>
                    </div>
                </div>
                <button className="btn btn-outline-secondary grades-btn">
                    <FaFilter />
                    Apply Filters
                </button>
            </form>

            <div className="table-responsive mt-4 me-4">
                <table className="table table-bordered table-striped table-hover align-middle">
                    <thead className="table-light">
                        <tr>
                            <th className="text-center align-middle align-width">Student Name</th>
                            {assignment.map((aId, index) => (
                                <th key={index} className="text-center align-middle">
                                    {aId._id}-{aId.title} <br /> Out of {aId.points + ""}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {enrollment.map((enrollment) => {
                            const user = users.find((user) => user._id === enrollment.user);
                            return (
                                <tr>
                                    <td className="name-link">{user?.firstName} {user?.lastName}</td>
                                    {assignment.map((assignment) => {
                                        const grade = grades.find(
                                            (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                                        const gradeId = `${enrollment.user}-${assignment._id}`;
                                        return (
                                            <td key={gradeId} align="center">
                                                {
                                                    selectedGradeId === gradeId ? (

                                                        <div className="position-relative">
                                                            <input
                                                                type="text"
                                                                className="form-control form-control-sm me-1 text-center"
                                                                value={grade?.grade || ""}
                                                                onChange={handleInputChange}
                                                            />
                                                            <button className="btn btn-outline-light p-1 position-absolute arrow-bracket-button" type="button">
                                                                <FaArrowRightFromBracket className="arrow-bracket-icon" />
                                                            </button>
                                                        </div>

                                                    ) : (
                                                        <td align="center" onClick={() => handleInputClick(gradeId)}>
                                                            {grade?.grade || ""}
                                                        </td>
                                                    )}
                                            </td>
                                        )
                                    })}
                                </tr>);
                        })}
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default Grades;