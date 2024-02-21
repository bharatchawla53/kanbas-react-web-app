import { Link, useLocation } from "react-router-dom";
import "./accountNavigation.css";

function AccountNavigation() {

    const { pathname } = useLocation();

    const links = ['Notifications', 'Profile', 'Files', 'Settings', 'ePortfolios', 'Shared Content', 'The Hub', 'Qwuickly Course Tools',
        'Global Announcements'];

    return (
        <div className="d-flex flex-column" id="account-sidebar">
            <ul>
                {links.map((link, index) => (
                    <li key={index} className={pathname.includes(link) ? "active" : ""}>
                        <Link to={link}>{link}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AccountNavigation;