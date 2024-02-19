import CollapseModuleBar from "./collapseModuleBar";
import OffcanvasSideNavbar from "./offcanvasSideNavbar";
import { FaBars, FaAngleDown, FaGlasses } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";
import "./index.css";

function MobileNavigation() {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-company-red">
                <div className="container-fluid">
                    <div className="toggle-sidenav-icon icon-white">
                        <a href="#" role="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasScrolling" aria-controls="offcanvasScrolling" aria-expanded="false">
                            <FaBars />
                        </a>
                    </div>


                    <div className="ms-auto float-end icon-white toggle-icons">
                        <FaGlasses />
                        <a href="#collapseModuleBar" data-bs-toggle="collapse" role="button" aria-expanded="false">
                            <FaAngleDown className="fa-angle-down" />
                            <RxCross1 className="fa-x" />
                        </a>
                    </div>
                </div>
            </nav>

            <OffcanvasSideNavbar />
            <CollapseModuleBar />
        </>
    );
}

export default MobileNavigation;