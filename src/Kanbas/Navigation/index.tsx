import { Link, useLocation } from "react-router-dom";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaDesktop } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import "./index.css";

function KanbasNavigation() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2" /> },
        { label: "Dashboard", icon: <FaTachometerAlt className="sidenav-icon fs-2" /> },
        { label: "Courses", icon: <FaBook className="sidenav-icon fs-2" /> },
        { label: "Calendar", icon: <FaRegCalendarAlt className="sidenav-icon fs-2" /> },
        { label: "Inbox", icon: <FaInbox className=" sidenav-icon fs-2" /> },
        { label: "History", icon: <FaRegClock className="sidenav-icon fs-2" /> },
        { label: "Studio", icon: <FaDesktop className="sidenav-icon fs-2" /> },
        { label: "Commons", icon: <FaArrowRightFromBracket className="sidenav-icon fs-2" /> },
        { label: "Help", icon: <IoIosHelpCircleOutline className="sidenav-icon fs-2" /> }
    ];

    const { pathname } = useLocation();

    return (
        <div className="d-none d-md-block">
            <div className="d-flex flex-column flex-shrink-1 align-items-center text-white left-menu-nav">
                <Link to={`/Kanbas/Dashboard`} className="d-flex mb-2">
                    <img width="80" height="80" src="../images/neu_logo.png" alt="Northeastern University Logo"></img>
                </Link>

                <ul className="nav nav-pills flex-column">
                    {links.map((link, index) => (
                        <li key={index} className={`nav-item ${pathname.includes(link.label) ? "active" : ""}`}>
                            <Link to={`/Kanbas/${link.label}`} className="nav-link d-flex flex-column align-items-center">
                                {link.icon} {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default KanbasNavigation;