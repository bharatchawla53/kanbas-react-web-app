import ModuleList from "../Modules/moduleList";
import Status from "./status";

function Home() {
    return (
        <div className="container-fluid d-flex flex-row me-xxl-3">
            <ModuleList />
            <Status />
        </div>
    );
}

export default Home;