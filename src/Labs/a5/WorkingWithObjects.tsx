import React, { useState } from "react";

function WorkingWithObjects() {
    const [assignment, setAssignment] = useState({
        id: 1,
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-10-10",
        completed: false,
        score: 0,
    });
    const [module, setModule] = useState({
        id: 1,
        name: "Test Module",
        description: "Test Module Description",
        course: "RA2542"
    });
    const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
    const MODULE_URL = "http://localhost:4000/a5/module";

    return (
        <div>
            <h3>Working With Objects</h3>
            <h4>Retrieving Objects</h4>
            <a href="http://localhost:4000/a5/assignment">
                Get Assignment
            </a>
            <br /><br />
            <h4>Retrieving Properties</h4>
            <a href="http://localhost:4000/a5/assignment/title">
                Get Title
            </a>
            <br /><br />

            <h4>Modifying Properties</h4>
            <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`}>
                Update Title
            </a>
            <input type="text"
                onChange={(e) => setAssignment({
                    ...assignment,
                    title: e.target.value
                })}
                value={assignment.title} />
            <br /><br />

            <h4>Modifying Properties</h4>
            <a href={`${ASSIGNMENT_URL}/score/${assignment.score}`}>
                Update Assignment Score
            </a>
            <input type="number"
                onChange={(e) => setAssignment({
                    ...assignment,
                    score: parseInt(e.target.value)
                })}
                value={assignment.score} />
            <br /><br />

            <h4>Modifying Properties</h4>
            <label>Assignment Completed</label> &nbsp;
            <input type="checkbox"
                onChange={(e) => setAssignment({
                    ...assignment,
                    completed: e.target.checked
                })}
                checked={assignment.completed}
                value={assignment.completed + ""} />
            <a href={`${ASSIGNMENT_URL}/complete?completed=${assignment.completed}`}>
                Update Assignment Complete
            </a>
            <br /><br />

            <h4>Retrieving Objects</h4>
            <a href="http://localhost:4000/a5/module">
                Get Module
            </a>
            <br /><br />

            <h4>Retrieving Properties</h4>
            <a href="http://localhost:4000/a5/module/name">
                Get Name
            </a>
            <br /><br />

            <h4>Modifying Properties</h4>
            <a href={`${MODULE_URL}/name/${module.name}`}>
                Update Module Name
            </a>
            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    name: e.target.value
                })}
                value={module.name} />
            <br /><br />

            <h4>Modifying Properties</h4>
            <a href={`${MODULE_URL}/description/${module.description}`}>
                Update Module Description
            </a>
            <input type="text"
                onChange={(e) => setModule({
                    ...module,
                    description: e.target.value
                })}
                value={module.description} />

        </div>
    );
}

export default WorkingWithObjects;