import {
  Button,
  Modal,
  Stack,
  ToastContainer,
  Toast,
  Form,
} from "react-bootstrap";
import { MdEdit } from "react-icons/md";
import { useContext, useState } from "react";
import { secretUpdate } from "../../../service/VegaVault/VegaVaultManager";
import { UserContext } from "../../../auth/UserProvider";

export function ModifySecret({ smallScreen, secret, setUpdateSecrets }) {
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleClose = (reset) => {
    if (reset) {
      setNewSecretName(secret.name);
      setNewSecretValue(secret.data);
    }
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const [showToast, setShowToast] = useState(false);

  const [newSecretName, setNewSecretName] = useState(secret.name);
  const [newSecretValue, setNewSecretValue] = useState(secret.data);

  const handleSubmit = () => {
    if (newSecretName && newSecretValue) {
      secretUpdate(
        {
          name: secret.name,
          newName: newSecretName,
          newData: newSecretValue,
          username: user.username.replace(/@venus.com/g, ""),
        },
        user.jwt
      ).then((res) => {
        console.log(res);
        handleClose(false);
        setShowToast(true);
        setUpdateSecrets(true);
      });
    } else {
      alert("Enter both a secret name and its value!");
    }
  };

  return (
    <>
      <Button onClick={handleShow}>
        <Stack direction="horizontal" gap={2}>
          <MdEdit />
          {smallScreen ? "" : "Modify"}
        </Stack>
      </Button>
      <Modal centered show={show} onHide={() => handleClose(true)}>
        <Modal.Header closeButton>
          <Modal.Title>Modify Secret</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Secret Title</Form.Label>
              <Form.Control
                onChange={(e) => setNewSecretName(e.target.value)}
                value={newSecretName}
                type="text"
                placeholder="Enter secret title"
              />
            </Form.Group>

            <Form.Group className="mb-3">
              <Form.Label>Secret</Form.Label>
              <Form.Control
                onChange={(e) => setNewSecretValue(e.target.value)}
                value={newSecretValue}
                as="textarea"
                placeholder="Enter secret"
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleSubmit}>
            Save
          </Button>
          <Button variant="danger" onClick={() => handleClose(true)}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer
        style={{
          zIndex: 10,
        }}
        position="bottom-center"
      >
        <Toast
          bg="dark"
          delay={3000}
          onClose={() => setShowToast(false)}
          autohide
          show={showToast}
          style={{
            color: "white",
          }}
        >
          <Toast.Header>
            <strong className="me-auto">Modified!</strong>
          </Toast.Header>
          <Toast.Body>{secret.name} has been updated!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
