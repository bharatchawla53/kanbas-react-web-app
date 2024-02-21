import { Navigate, Route, Routes } from "react-router";
import AccountNavigation from "./Navigation/accountNavigation";
import Profile from "./Profile";
import { FaBars } from "react-icons/fa";
import "./index.css";
import EditProfile from "./Profile/Edit";

function Account() {
    return (
        <div className=" account-main">
            <span id="account-page-header" className="d-flex flex-row align-items-center">
                <h2>
                    <FaBars className="me-4" />
                    Bharat Chawla's Profile
                </h2>
            </span>
            <hr />

            <div className="d-flex flex-row">
                <AccountNavigation />
                <>
                    <Routes>
                        <Route path="/" element={<Navigate to="Profile" />} />
                        <Route path="Notifications" element={<h2>Notifications</h2>} />
                        <Route path="Profile" element={<Profile />} />
                        <Route path="Profile/Edit" element={<EditProfile />} />
                        <Route path="Files" element={<h2>Files</h2>} />
                        <Route path="Settings" element={<h2>Settings</h2>} />
                        <Route path="ePortfolios" element={<h2>ePortfolios</h2>} />
                        <Route path="Shared Content" element={<h2>Shared Content</h2>} />
                        <Route path="The Hub" element={<h2>The Hub</h2>} />
                        <Route path="Qwuickly Course Tools" element={<h2>Qwuickly Course Tools</h2>} />
                        <Route path="Global Announcements" element={<h2>Global Announcements</h2>} />
                    </Routes>
                </>
            </div>
        </div>
    );
}

export default Account; 