import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from '../../Store';
import { addModule, setModule } from './modulesReducer';
import * as api from "./api";

function AddModule({ courseId, show, setShow }: {
    courseId: string;
    show: boolean;
    setShow: (show: boolean) => void;
}) {

    const module = useSelector((state: KanbasState) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleAddModule = () => {
        api.createModule(courseId, module)
            .then((module) => {
                dispatch(addModule(module));
            })
        setShow(false);
    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Add Module</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className='mb-3'>
                        <Form.Label>Module Name</Form.Label>
                        <Form.Control
                            type='text'
                            value={module.name}
                            onChange={(e) => dispatch(setModule({
                                ...module, name: e.target.value
                            }))}
                            onFocus={(e) => e.target.style.textAlign = 'left'}
                        />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                        <Form.Label>Module Description</Form.Label>
                        <Form.Control
                            type='text' value={module.description}
                            onChange={(e) => dispatch(setModule({
                                ...module, description: e.target.value
                            }))}
                            onFocus={(e) => e.target.style.textAlign = 'left'}
                        />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <button className='btn btn-outline-secondary' onClick={() => setShow(false)}>Cancel</button>
                <button className='btn btn-danger' onClick={() => { handleAddModule() }}>Add Module</button>
            </Modal.Footer>
        </Modal >
    );
}

export default AddModule; 