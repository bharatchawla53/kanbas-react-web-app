import { courses } from '../Database';
import { Link } from "react-router-dom";
import { FaEllipsisVertical, FaFilePen } from "react-icons/fa6";
import MobileNavigation from '../Courses/MobileNavigation';
import './index.css';

function Dashboard() {
    return (
        <>
            <div className="main">
                <div className="d-block d-md-none mb-3 mobile-navbar">
                    <MobileNavigation />
                </div>
                <div className="d-none d-md-block">
                    <h1>Dashboard</h1>
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
                                    <Link to={`/Kanbas/Courses/${course._id}/Home`} className='card-icon'>
                                        <FaFilePen />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default Dashboard