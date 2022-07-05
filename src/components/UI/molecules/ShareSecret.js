import { Button, Stack, Modal, Form } from "react-bootstrap";
import { MdShare } from "react-icons/md";
import { useContext, useState } from "react";
import {
  secretDelete,
  secretShare,
} from "../../../service/VegaVault/VegaVaultManager";
import { UserContext } from "../../../auth/UserProvider";

export function ShareSecret({ smallScreen, secret, setUpdateSecrets }) {
  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);
  const [shareUsername, setShareUsername] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleShare = () => {
    if (shareUsername) {
      console.log("Sharing secret", secret.id, "to", shareUsername);
      secretShare({
        username: secret.username,
        id: secret.id,
        shareWithUsername: shareUsername,
      }).then((res) => {
        handleClose();
        setUpdateSecrets(true);
      });
    }
  };

  return (
    <>
      <Button variant="warning" onClick={handleShow}>
        <Stack direction="horizontal" gap={2}>
          <MdShare />
          {smallScreen ? "" : "Share"}
        </Stack>
      </Button>
      <Modal centered show={show} onHide={() => handleClose(true)}>
        <Modal.Header closeButton>
          <Modal.Title>Share Secret</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          What is the username of the person you want to share this secret with?
          <Form.Control
            value={shareUsername}
            onChange={(e) => setShareUsername(e.target.value)}
          />
        </Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleShare}>
            Share{shareUsername ? ` with ${shareUsername}` : ""}
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
