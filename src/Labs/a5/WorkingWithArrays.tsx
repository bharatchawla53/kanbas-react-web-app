import React, { useEffect, useState } from "react";
import axios from "axios";

interface Todo {
    id: string,
    title: string,
    description: string,
    due: string,
    completed: boolean
}

function WorkingWithArrays() {
    const API = "http://localhost:4000/a5/todos";
    const [todo, setTodo] = useState<Todo>({
        id: "1",
        title: "NodeJS Assignment",
        description: "Create a NodeJS server with ExpressJS",
        due: "2021-09-09",
        completed: false,
    });

    const [todos, setTodos] = useState<Todo[]>([]);
    const [errorMessage, setErrorMessage] = useState(null);

    const fetchTodos = async () => {
        const response = await
            axios.get(API);
        setTodos(response.data);
    };

    const removeTodo = async (todo: Todo) => {
        const response = await
            axios.get(`${API}/${todo.id}/delete`);
        setTodos(response.data);
    };

    const createTodo = async () => {
        const response = await
            axios.get(`${API}/create`);
        setTodos(response.data);
    };

    const fetchTodoById = async (id: string) => {
        const response = await
            axios.get(`${API}/${id}`);
        setTodo(response.data);
    };

    const updateTitle = async () => {
        const response = await
            axios.get(`${API}/${todo.id}/title/${todo.title}`);
        setTodos(response.data);
    };

    const postTodo = async () => {
        const response = await
            axios.post(API, todo);
        setTodos([...todos, response.data]);
    }

    const deleteTodo = async (todo: Todo) => {
        try {
            const response = await
                axios.delete(`${API}/${todo.id}`);
            setTodos(todos.filter((t) => t.id !== todo.id));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }

    };

    const updateTodo = async () => {
        try {
            const response = await
                axios.put(`${API}/${todo.id}`, todo);
            setTodos(todos.map((t) => (t.id === todo.id ? todo : t)));
        } catch (error: any) {
            console.log(error);
            setErrorMessage(error.response.data.message);
        }
    };

    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        <div>
            <h3>Working with Arrays</h3>
            <h4>Retrieving Arrays</h4>
            <a href={API}>
                Get Todos
            </a>
            <br /><br />
            <input
                className="form-control"
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: e.target.value
                })} />
            <br />
            <input
                className="form-control"
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })}
            />
            <br />
            <textarea
                value={todo.description}
                className="form-control"
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })}
            />
            <br />
            <input
                value={todo.due}
                type="date"
                onChange={(e) => setTodo({
                    ...todo,
                    due: e.target.value
                })}
            />
            <br />
            <label>
                <input
                    value={todo.completed + ""}
                    type="checkbox"
                    onChange={(e) => setTodo({
                        ...todo,
                        completed: e.target.checked
                    })} />
                Completed
            </label>
            <br /><br />
            <button onClick={postTodo}>
                Post Todo
            </button>
            <br /><br />
            <button onClick={updateTodo}>
                Update Todo
            </button>
            <br /><br />
            <button onClick={() => createTodo()}>
                Create Todo
            </button>
            <br /><br />
            <button onClick={() => updateTitle()}>
                Update Title
            </button>
            <br /><br />
            {errorMessage && (
                <div className="alert alert-danger mb-2 mt-2">
                    {errorMessage}
                </div>
            )}
            <br /><br />
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id} className="list-group-item">
                        <input
                            checked={todo.completed}
                            type="checkbox"
                            readOnly />
                        {todo.title}
                        <p>{todo.description}</p>
                        <p>{todo.due}</p>

                        <button onClick={() => deleteTodo(todo)}>
                            Delete
                        </button>
                        &nbsp;&nbsp;
                        <button onClick={() => fetchTodoById(todo.id)} >
                            Edit
                        </button>
                    </li>
                ))}
            </ul>
            <br /><br />
            <h4>Retrieving an Item from an Array by ID</h4>
            <input
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: e.target.value
                })} />
            <a href={`${API}/${todo.id}`}>
                Get Todo by ID
            </a>
            <br /><br />
            <h3>Filtering Array Items</h3>
            <a href={`${API}?completed=true`}>
                Get Completed Todos
            </a>
            <br /><br />
            <h3>Creating new Items in an Array</h3>
            <a href={`${API}/create`}>
                Create Todo
            </a>
            <br /><br />
            <h3>Deleting from an Array</h3>
            <a href={`${API}/${todo.id}/delete`}>
                Delete Todo with ID = {todo.id}
            </a>
            <br /><br />
            <input
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: e.target.value
                })} />
            <br /><br />
            <input
                type="text"
                value={todo.title}
                onChange={(e) => setTodo({
                    ...todo, title: e.target.value
                })} />
            <h3>Updating an Item in an Array</h3>
            <a href={`${API}/${todo.id}/title/${todo.title}`} >
                Update Title to {todo.title}
            </a>
            <br /><br />

            <input
                value={todo.id}
                onChange={(e) => setTodo({
                    ...todo,
                    id: e.target.value
                })} />
            <br /><br />
            <input
                type="text"
                value={todo.description}
                onChange={(e) => setTodo({
                    ...todo,
                    description: e.target.value
                })} />
            <h3>Updating an Item in an Array</h3>
            <a href={`${API}/${todo.id}/description/${todo.description}`} >
                Update Description to {todo.description}
            </a>
            <br /><br />

            <label>Todo Completed</label> &nbsp;
            <input
                type="checkbox"
                onChange={(e) => setTodo({
                    ...todo,
                    completed: e.target.checked
                })}
                checked={todo.completed}
                value={todo.completed + ""} />
            <a href={`${API}/${todo.id}/completed/${todo.completed}`}>
                Update Assignment Complete
            </a>
            <br /><br />

        </div>
    );
}

export default WorkingWithArrays;
