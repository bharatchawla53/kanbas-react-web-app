import { Link } from "react-router-dom";
import { FaEllipsisVertical, FaFilePen } from "react-icons/fa6";
import MobileNavigation from '../Courses/MobileNavigation';
import { MdDelete, MdEdit } from "react-icons/md";
import './index.css';
import { Course } from "../Interfaces/course";

function Dashboard({ courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }: {
        courses: Course[], course: Course, setCourse: (course: Course) => void,
        addNewCourse: () => void, deleteCourse: (courseId: string) => void, updateCourse: () => void
    }
) {

    return (
        <>
            <div className="main">
                <div className="d-block d-md-none mb-3 mobile-navbar">
                    <MobileNavigation />
                </div>
                <div className="d-none d-md-block">
                    <h1>Dashboard</h1>
                    <h5>Course</h5>

                    <form>
                        <div className='form-row'>
                            <div className='col-md-2 mb-3'>
                                <input
                                    value={course.name}
                                    className="form-control mb- 2"
                                    onChange={(e) => setCourse({ ...course, name: e.target.value })} />
                            </div>
                            <div className='col-md-2 mb-3'>
                                <input
                                    value={course.number}
                                    className="form-control"
                                    onChange={(e) => setCourse({ ...course, number: e.target.value })} />
                            </div>
                            <div className='col-md-2 mb-3'>
                                <input
                                    value={course.startDate}
                                    className="form-control"
                                    type="date"
                                    onChange={(e) => setCourse({ ...course, startDate: e.target.value })} />
                            </div>
                            <div className='col-md-2 mb-3'>
                                <input
                                    value={course.endDate}
                                    className="form-control"
                                    type="date"
                                    onChange={(e) => setCourse({ ...course, endDate: e.target.value })} />
                            </div>
                        </div>
                        <button className='btn btn-outline-secondary' onClick={addNewCourse}>
                            Add New Course
                        </button>
                        <button className='btn btn-outline-secondary ms-2' onClick={updateCourse}>
                            Update Course
                        </button>
                    </form>

                    <hr />
                    <h2>Published Courses ({courses.length})</h2>
                </div>
                <hr />
                <div className="d-flex flex-row flex-wrap row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 card-container">
                    {courses.map((course) => (
                        <div key={course._id} className='col'>
                            <div className='card'>
                                <div>
                                    <button type="button" className="card-img-button">
                                        <FaEllipsisVertical />
                                    </button>
                                </div>
                                <img src={`/images/${course.image}`} className="card-img-top" alt='' />
                                <div className="card-body d-flex flex-column">
                                    <Link className='mb-2 card-title' to={`/Kanbas/Courses/${course._id}/Home`}>
                                        {course.number} {course.name}
                                    </Link>
                                    <h5 className='card-subtitle'>
                                        {course.number}.{course.startDate}
                                    </h5>
                                    <p className='card-text text-truncate'>
                                        {course.courseText}
                                    </p>
                                    <div className='d-flex align-items-center'>
                                        <Link to={`/Kanbas/Courses/${course._id}/Home`} className='card-icon'>
                                            <FaFilePen />
                                        </Link>
                                        <button
                                            type='button'
                                            className='card-icon'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setCourse(course);
                                            }}>
                                            <MdEdit className='icon-size' />
                                        </button>
                                        <button
                                            type='button'
                                            className='card-icon'
                                            onClick={(e) => {
                                                e.preventDefault();
                                                deleteCourse(course._id)
                                            }}>
                                            <MdDelete className='icon-size' />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div >
        </>
    )
}

export default Dashboard