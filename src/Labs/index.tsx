import Assignment3 from "./a3";
import Nav from "../Nav";
import { Routes, Route, Navigate } from "react-router";
import Assignment4 from "./a4";

function Labs() {
    return (
        <div>
            <Nav />
            <Routes>
                <Route path="/"
                    element={<Navigate
                        to="a3" />} />
                <Route path="a3"
                    element={<Assignment3 />} />
                <Route path="a4"
                    element={<Assignment4 />} />
            </Routes>

        </div>
    );
}

export default Labs;