import React, { useState } from "react";
import { FaEllipsisV, FaCheckCircle, FaPlus, FaPlusCircle, FaBan, FaSortDown, FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { useParams } from "react-router";
import { useLocation } from "react-router-dom";
import "./moduleList.css";
import "./../../style.css";
import AddModule from "./addModule";
import { Module } from "../../Interfaces/module";
import EditModule from "./editModule";
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../Store";
import { deleteModule, setModule } from "./modulesReducer";

function ModuleList() {

    const moduleDropDownOptions = [
        { item: "Edit", icon: <FaEdit className="me-1" /> },
        { item: "Delete", icon: <MdDelete className="me-1" /> }
    ]

    const { courseId } = useParams();
    const moduleList = useSelector((state: KanbasState) => state.modulesReducer.modules);
    const dispatch = useDispatch();

    const [selectedModule, setSelectedModule] = useState(moduleList[0]);
    const [showModule, setShowModule] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const [showUpdateModule, setShowUpdateModule] = useState(false);

    // location will be used to split columns for layout in home and modules screen
    const { pathname } = useLocation();
    const pathParts = decodeURIComponent(pathname).split("/");
    const activeCourseTab = pathParts[pathParts.length - 1];

    const handleShowModuleClick = () => {
        setShowModule(true);
    };

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    }

    const handleDropdownSelectedOption = (selectedItem: string, module: Module) => {
        console.log(selectedItem);

        switch (selectedItem) {
            case 'Edit':
                dispatch(setModule(module));
                setShowUpdateModule(!showUpdateModule);
                break;
            case 'Delete':
                dispatch(deleteModule(module._id));
                break;
        }
    }

    return (
        <div className={`${activeCourseTab === 'Home' ? 'col-xxl-9' : ''} col-12`}>
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

                    <button className="btn btn-danger" type="button" onClick={handleShowModuleClick}>
                        <FaPlus />
                        <span className="p-1">Module</span>
                    </button>

                    {showModule && courseId && <AddModule courseId={courseId} show={showModule} setShow={setShowModule} />}

                    {showUpdateModule && <EditModule show={showUpdateModule} setShow={setShowUpdateModule} />}

                    <button className="btn btn-outline-secondary me-1 ellipsis" type="button">
                        <FaEllipsisV className="ellipsis-v" />
                    </button>
                </div>

                <hr />

                {moduleList
                    .filter((module) => module.course === courseId)
                    .map((module, index) => (
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
                                    {!selectedModule || selectedModule._id !== module._id && (
                                        <FaEllipsisV className="me-3" />
                                    )}

                                    {/* toggle drodown only for selected module */}
                                    {selectedModule && selectedModule._id === module._id &&
                                        <div className="dropdown" onClick={toggleDropdown}>
                                            <button className="module-dropdown"
                                                aria-expanded={showDropdown}
                                                onClick={toggleDropdown}
                                            >
                                                <FaEllipsisV className="no-spacing-ellipsis" />
                                            </button>
                                            <div className={`dropdown-menu dropdown-menu-start module-dropdown-menu${showDropdown ? ' show' : ''}`}>
                                                {moduleDropDownOptions.map((option, index) => (
                                                    <button
                                                        key={index}
                                                        className="dropdown-item"
                                                        onClick={(e) => {
                                                            handleDropdownSelectedOption(option.item, module);
                                                        }}>
                                                        {option.icon}
                                                        {option.item}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    }

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
    );
}

export default ModuleList;