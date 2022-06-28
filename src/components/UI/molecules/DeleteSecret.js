import {
  Button,
  Stack,
  Modal,
  Form,
  ToastContainer,
  Toast,
} from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useContext, useState } from "react";
import { secretDelete } from "../../../service/VegaVault/VegaVaultManager";
import { UserContext } from "../../../auth/UserProvider";

export function DeleteSecret({ smallScreen, secret, setUpdateSecrets }) {
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [showToast, setShowToast] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    secretDelete(secret, user.jwt).then((res) => {
      handleClose();
      setShowToast(true);
      setUpdateSecrets(true);
    });
  };

  return (
    <>
      <Button variant="danger" onClick={handleShow}>
        <Stack direction="horizontal" gap={2}>
          <MdDelete />
          {smallScreen ? "" : "Delete"}
        </Stack>
      </Button>
      <Modal centered show={show} onHide={() => handleClose(true)}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Secret</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure you want to delete{" "}
          <span style={{ fontWeight: "bold" }}>{secret.name}</span> from your
          vault?
        </Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
          <Button variant="success" onClick={handleClose}>
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
            <strong className="me-auto">Deleted!</strong>
          </Toast.Header>
          <Toast.Body>{secret.name} has been deleted!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
