import { Link, useNavigate, useParams } from "react-router-dom";
import { FaCheckCircle, FaEdit, FaEllipsisV, FaPlus, FaSortDown } from "react-icons/fa";
import { FaPenToSquare } from "react-icons/fa6";
import "./index.css";
import "./../../style.css";
import { KanbasState } from "../../Store";
import { useSelector, useDispatch } from "react-redux";
import { selectAssignment } from "./assignmentsReducer";
import { useState } from "react";
import { MdDelete } from "react-icons/md";
import { Assignment } from "../../Interfaces/assignment";
import DeleteAssignment from "./deleteAssignment";

function Assignments() {

    const assignmentDropDownOptions = [
        { item: "Edit", icon: <FaEdit className="me-1" /> },
        { item: "Delete", icon: <MdDelete className="me-1" /> }
    ]

    const { courseId } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const assignmentList = useSelector((state: KanbasState) => state.assignmentReducer.assignments)
        .filter((assignment) => assignment.course === courseId);
    const [showDropdowns, setShowDropdowns] = useState(Array(assignmentList.length).fill(false));
    const [showDeleteModal, setShowDeleteModal] = useState(false);

    const toggleDropdown = (index: number) => {
        setShowDropdowns(prevState =>
            prevState.map((value, idx) => idx === index ? !value : value)
        );
    }

    const handleDropdownSelectedOption = (selectedItem: string, assignment: Assignment) => {
        console.log(selectedItem);
        setShowDropdowns(Array(assignmentList.length).fill(false));

        switch (selectedItem) {
            case 'Edit':
                dispatch(selectAssignment(assignment));
                navigate(`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`);
                break;
            case 'Delete':
                dispatch(selectAssignment(assignment));
                setShowDeleteModal(true);
                break;
        }
    }

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
                        <Link to={`/Kanbas/Courses/${courseId}/Assignments/new`} className="btn btn-danger me-1 custom-btn">
                            <FaPlus className="me-1 custom-icon" />
                            Assignment
                        </Link>
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
                        <div key={index} className="d-flex list-group-item align-items-center selected">
                            <div className="d-flex align-items-center">
                                <FaEllipsisV />
                                <FaEllipsisV className="no-spacing-ellipsis" />
                            </div>
                            <div className="ms-3">
                                <FaPenToSquare className="green-icon" />
                            </div>
                            <div className="d-flex flex-column ms-3 me-auto">
                                <Link
                                    to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                                    onClick={() => dispatch(selectAssignment(assignment))}>
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

                                <div className="dropdown" onClick={() => toggleDropdown(index)}>
                                    <button className="module-dropdown"
                                        aria-expanded={showDropdowns[index]}
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            toggleDropdown(index)
                                        }
                                        }
                                    >
                                        <FaEllipsisV />
                                    </button>
                                    <div className={`dropdown-menu dropdown-menu-start module-dropdown-menu${showDropdowns[index] ? ' show' : ''}`}>
                                        {assignmentDropDownOptions.map((option, index) => (
                                            <button
                                                key={index}
                                                className="dropdown-item"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    handleDropdownSelectedOption(option.item, assignment);
                                                }}>
                                                {option.icon}
                                                {option.item}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {showDeleteModal && <DeleteAssignment show={showDeleteModal} setShow={setShowDeleteModal} />}

                </div>
            </div>
        </div >
    );
}

export default Assignments