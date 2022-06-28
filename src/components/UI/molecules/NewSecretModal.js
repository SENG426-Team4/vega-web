import { Modal, Button, Form } from "react-bootstrap";

export function NewSecretModal({
  show,
  handleSubmit,
  handleClose,
  setSecretName,
  secretName,
  setSecretValue,
  secretValue,
}) {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Create New Secret</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Secret Title</Form.Label>
            <Form.Control
              onChange={(e) => setSecretName(e.target.value)}
              value={secretName}
              type="text"
              placeholder="Enter secret title"
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Secret</Form.Label>
            <Form.Control
              onChange={(e) => setSecretValue(e.target.value)}
              value={secretValue}
              as="textarea"
              placeholder="Enter secret"
            />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            handleSubmit();
            handleClose();
          }}
        >
          Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
