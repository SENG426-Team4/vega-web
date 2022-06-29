import { Button, Stack, Modal } from "react-bootstrap";
import { MdDelete } from "react-icons/md";
import { useContext, useState } from "react";
import { secretDelete } from "../../../service/VegaVault/VegaVaultManager";
import { UserContext } from "../../../auth/UserProvider";

export function DeleteSecret({ smallScreen, secret, setUpdateSecrets }) {
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleDelete = () => {
    secretDelete(secret, user.jwt).then((res) => {
      handleClose();
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
    </>
  );
}
