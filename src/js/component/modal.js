import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

export function LoginButton() {
	const [show, setShow] = useState(false);

	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	return (
		<>
			<Button variant="primary" onClick={handleShow}>
				Login
			</Button>

			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>Login</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<input type="text" className="form-control" placeholder="Username" />
					<input type="text" className="form-control" placeholder="Password" />
				</Modal.Body>
				<Modal.Footer>
					<Button as="input" type="submit" value="Submit" />
				</Modal.Footer>
			</Modal>
		</>
	);
}
