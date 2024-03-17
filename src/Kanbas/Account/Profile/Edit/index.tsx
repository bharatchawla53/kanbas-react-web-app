import { Link, useNavigate } from "react-router-dom";
import { FaRegUserCircle, FaArrowRight, FaPencilAlt } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import "./index.css";

function EditProfile() {
    const links = [
        { label: "Instagram", url: "https://www.instagram.com" },
        { label: "Youtube", url: "https://www.youtube.com" }
    ]

    const navigate = useNavigate();

    const handleAnotherLink = () => {
        console.log("Actually adding of another link will be implemented in later assignments.");
        navigate(`/Kanbas/Account/Profile`);
    }

    const handleSave = () => {
        console.log("Actually saving of profile will be implemented in later assignments.");
        navigate(`/Kanbas/Account/Profile`);
    }

    return (
        <div className="layout-contentWrapper">
            <div className="layout-content">
                <div className="profile-layout">
                    <div className="profile-layout-primary">
                        <div className="image-block">
                            <div className="profile-avatar">
                                <FaRegUserCircle className="user-circle" />
                            </div>
                            <div className="profile-content">
                                <form>
                                    <label className="ic-label">
                                        Name:
                                        <span title="This field is required">*</span>
                                        <input type="text" className="ic-input" value="Bharat Chawla" placeholder="Name" />
                                    </label>
                                    <label className="ic-label">Pronouns:</label>
                                    <select>
                                        <option selected>None</option>
                                        <option>He/Him/His</option>
                                        <option>She/Her</option>
                                        <option>They/Them</option>
                                    </select>
                                    <label className="ic-label">
                                        Title:
                                        <input type="text" className="ic-input" />
                                    </label>
                                    <div>
                                        <h3 className="profileHeader">Contact</h3>
                                        <p>No registered services, you can add some on the <Link to={`/Kanbas/Account/Settings`}>settings </Link>page.</p>
                                    </div>
                                    <div>
                                        <h3 className="profileHeader">Biography</h3>
                                        <textarea className="bio-text-area">Faculty, Software Engineer, AI, Space, and renewables enthusiast.</textarea>
                                    </div>
                                    <div>
                                        <h3 className="profileHeader">Links</h3>
                                        <div className="row mb-1 align-items-center">
                                            <div className="d-flex col-5 justify-content-center">
                                                <span className="profile-label">Title</span>
                                            </div>
                                            <div className="col-1">

                                            </div>
                                            <div className="d-flex col-5 justify-content-center">
                                                <span className="profile-label">URL</span>
                                            </div>
                                            <div className="col-1">

                                            </div>
                                        </div>

                                        {links.map((link, index) => (
                                            <div className="row mb-1 align-items-center" key={index}>
                                                <div className="col-5">
                                                    <input type="text" className="form-control" value={link.label} />
                                                </div>
                                                <div className="col-1">
                                                    <FaArrowRight />
                                                </div>
                                                <div className="col-5">
                                                    <input type="text" className="form-control"
                                                        value={link.url} />
                                                </div>
                                                <div className="col-1">
                                                    <FaXmark />
                                                </div>
                                            </div>
                                        ))}

                                        <button className="btn btn-outline-secondary fs-0" onClick={handleAnotherLink}>Add another link</button>
                                        <hr />
                                    </div>

                                    <div className="d-flex flex-row justify-content-end">
                                        <Link to={`/Kanbas/Account/Profile`} className="btn btn-outline-secondary me-1">Cancel</Link>
                                        <button className="btn btn-danger me-1" onClick={handleSave}>Save</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    <div className="profile-layout-secondary">
                        <Link to={`/Kanbas/Account/Profile`} className="btn btn-outline-secondary me-1">
                            <FaPencilAlt className="me-1" />
                            Cancel Editing
                        </Link>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default EditProfile; 