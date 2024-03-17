import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaRegClock, FaDesktop, FaGreaterThan } from "react-icons/fa";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { IoIosHelpCircleOutline } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import "./offcanvasSideNavbar.css";

function OffcanvasSideNavbar() {
    const links = [
        { label: "Account", icon: <FaRegUserCircle className="fs-2 account-icon" />, allowArrowIcon: true },
        { label: "Dashboard", icon: <FaTachometerAlt className="sidenav-icon fs-2" />, allowArrowIcon: false },
        { label: "Courses", icon: <FaBook className="sidenav-icon fs-2" />, allowArrowIcon: true },
        { label: "Calendar", icon: <FaRegCalendarAlt className="sidenav-icon fs-2" />, allowArrowIcon: false },
        { label: "Inbox", icon: <FaInbox className=" sidenav-icon fs-2" />, allowArrowIcon: false },
        { label: "History", icon: <FaRegClock className="sidenav-icon fs-2" />, allowArrowIcon: true },
        { label: "Studio", icon: <FaDesktop className="sidenav-icon fs-2" />, allowArrowIcon: false },
        { label: "Commons", icon: <FaArrowRightFromBracket className="sidenav-icon fs-2" />, allowArrowIcon: false },
        { label: "Help", icon: <IoIosHelpCircleOutline className="sidenav-icon fs-2" />, allowArrowIcon: true }
    ];

    return (
        <div className="offcanvas offcanvas-start" data-bs-scroll="true" data-bs-backdrop="false" tabIndex={-1} id="offcanvasScrolling" aria-labelledby="offcanvasScrollingLabel">
            <div className="offcanvas-header">
                <a href="#">
                    <img id="canvas-icon" src="../../../images/canvas_icon.png" />
                </a>
                <button type="button" className="btn-close float-end" data-bs-dismiss="offcanvas" aria-label="Close"></button>

            </div>

            <div className="offcanvas-body">
                <ul className="list-group">
                    {links.map((link, index) => (
                        <li key={index} className="list-group-item border-0">
                            {link.icon}
                            <Link to={`/Kanbas/${link.label}`}>
                                {link.label}
                            </Link>

                            {link.allowArrowIcon ? <FaGreaterThan className="float-end fa-greater-than" /> : null}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default OffcanvasSideNavbar;