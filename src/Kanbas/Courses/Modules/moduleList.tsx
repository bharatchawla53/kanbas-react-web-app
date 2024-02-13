import React, { useState } from "react";
import "./../../style.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlus, FaPlusCircle, FaBan, FaSortDown } from "react-icons/fa";
import { CiCircleCheck } from "react-icons/ci";
import { useParams } from "react-router";
import "./moduleList.css"

function ModuleList() {

    // declaring interfaces to enforce structure for json 
    interface Lesson {
        _id: String;
        name: String;
        description: String;
        module: String;
        indent: Number
    }

    interface Module {
        _id: String;
        name: String;
        description: String;
        course: String;
        lessons: Lesson[];
    }

    const { courseId } = useParams();
    const modulesList: Module[] = modules.filter((module) => module.course === courseId);
    const [selectedModule, setSelectedModule] = useState(modulesList[0]);

    console.log(modulesList);

    return (
        <div className="container-fluid d-flex flex-row me-xxl-3">
            <div className="col-12">
                <div className="d-flex flex-column mx-4">
                    <div className="d-flex flex-row ms-auto float-end mb-1" id="courses-content-top-buttons">
                        <button className="btn btn-outline-secondary me-1" type="button">
                            Collapse All
                        </button>
                        <button className="btn btn-outline-secondary me-1" type="button">
                            View Progress
                        </button>

                        <div className="dropdown">
                            <button className="btn btn-outline-secondary dropdown-toggle me-1" data-bs-toggle="dropdown"
                                aria-expanded="false" type="button">
                                <CiCircleCheck className="circle-check" />
                                Publish All
                            </button>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="#"><FaCheckCircle className="circle-check" />Publish all modules and items</a></li>
                                <li><a className="dropdown-item" href="#"><FaCheckCircle className="circle-check" />Publish modules only</a></li>
                                <li><a className="dropdown-item" href="#"><FaBan />Unpublish all modules and items</a></li>
                                <li><a className="dropdown-item" href="#"><FaBan />Unpublish all modules only</a></li>
                            </ul>
                        </div>

                        <button className="btn btn-danger" type="button">
                            <FaPlus />
                            <span className="p-1">Module</span>
                        </button>

                        <button className="btn btn-outline-secondary me-1 ellipsis" type="button">
                            <FaEllipsisV className="ellipsis-v" />
                        </button>
                    </div>

                    <hr />

                    {modulesList.map((module, index) => (
                        <div className="list-group p-0 mb-5 rounded-0">
                            <div className="d-flex list-group-item" key={index} onClick={() => setSelectedModule(module)}>
                                <div className="d-flex align-items-center">
                                    <FaEllipsisV />
                                    <FaEllipsisV className="no-spacing-ellipsis" />
                                    <FaSortDown className="sort-down" />
                                </div>

                                <div className="ms-2 me-auto">
                                    <span>{module.name}</span>
                                </div>

                                <div className="d-flex align-items-center title-icons float-end">
                                    <FaCheckCircle className="circle-check" />
                                    <FaSortDown className="me-3 mb-2" />
                                    <FaPlus className="me-3" />
                                    <FaEllipsisV className="no-spacing-ellipsis" />
                                </div>
                            </div>
                            {
                                selectedModule._id === module._id && (
                                    <>
                                        {module.lessons?.map((lesson, index) => (
                                            <div key={index} className="d-flex list-group-item selected">
                                                <div className="d-flex align-items-center">
                                                    <FaEllipsisV />
                                                    <FaEllipsisV className="no-spacing-ellipsis" />
                                                </div>
                                                <div className={`ms-${lesson.indent} me-auto`}>
                                                    <span>{lesson.name}</span>
                                                </div>
                                                <div className="d-flex float-end align-items-center">
                                                    <FaCheckCircle className="me-3 circle-check" />
                                                    <FaEllipsisV className="no-spacing-ellipsis" />

                                                </div>
                                            </div>
                                        ))}
                                    </>
                                )
                            }
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}

export default ModuleList;