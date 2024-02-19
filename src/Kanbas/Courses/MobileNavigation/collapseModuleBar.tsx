import "./collapseModuleBar.css";
import { FaHome, FaBook, FaBullhorn, FaPlug, FaTasks, FaRocket } from "react-icons/fa";
import { FaPenToSquare, FaPeopleGroup } from "react-icons/fa6";
import { Link, useLocation, Route } from "react-router-dom";

function CollapseModuleBar() {
    const links = [
        { label: "Home", icon: <FaHome className="me-1 mb-1 red-icon" /> },
        { label: "Syllabus", icon: <FaBook className="me-1 mb-1 red-icon" /> },
        { label: "Announcements", icon: <FaBullhorn className="me-1 mb-1 red-icon" /> },
        { label: "Zoom Meetings", icon: <FaPlug className="me-1 mb-1 red-icon" /> },
        { label: "Modules", icon: <FaTasks className="me-1 mb-1 red-icon" /> },
        { label: "Assignments", icon: <FaPenToSquare className="me-1 mb-1 red-icon" /> },
        { label: "Quizzes", icon: <FaRocket className="me-1 mb-1 red-icon" /> },
        { label: "Piazza", icon: <FaPlug className="me-1 mb-1 red-icon" /> },
        { label: "Grades", icon: <FaBook className="me-1 mb-1 red-icon" /> },
        { label: "People", icon: <FaPeopleGroup className="me-1 mb-1 red-icon" /> }
    ];

    const { pathname } = useLocation();
    const pathParts = decodeURIComponent(pathname).split("/");
    pathParts.pop();
    const modifiedPathName = pathParts.join('/');

    return (
        <div className="collapse" id="collapseModuleBar">
            <div className="card card-body ">
                <div>
                    <ul className="list-group">
                        {links.map((link, index) => (
                            <li key={index} className={`list-group-item ${pathname.includes(link.label) ? "active" : ""} border-0 `}>
                                {link.icon}
                                <Link to={`${modifiedPathName}/${link.label}`} id="link-hover">
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default CollapseModuleBar;