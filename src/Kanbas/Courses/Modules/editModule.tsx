import { useSelector, useDispatch } from "react-redux";
import { KanbasState } from "../../Store";
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { useState } from "react";
import { setModule, updateModule } from "./modulesReducer";

function EditModule({ show, setShow }: {
    show: boolean;
    setShow: (show: boolean) => void;
}) {

    const module = useSelector((state: KanbasState) => state.modulesReducer.module);
    const dispatch = useDispatch();

    const handleUpdateModule = () => {
        dispatch(updateModule(module));
        setShow(false);
    }

    return (
        <Modal show={show} onHide={() => setShow(false)}>
            <Modal.Header closeButton>
                <Modal.Title>Update Module</Modal.Title>
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
                <button className='btn btn-danger' onClick={() => { handleUpdateModule() }}>Update Module</button>
            </Modal.Footer>
        </Modal >
    );
}

export default EditModule;