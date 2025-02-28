import { Button, Modal, Stack, ToastContainer, Toast } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

export function SeeSecret({ smallScreen, secret }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <Button variant="success" onClick={() => handleShow()}>
        <Stack direction="horizontal" gap={2}>
          <AiFillEye />
          {smallScreen ? "" : "See"}
        </Stack>
      </Button>
      <Modal centered show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>View Secret</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stack gap={1}>
            <h5
              style={{
                opacity: 0.6,
              }}
            >
              Secret Name
            </h5>
            <h4
              style={{
                padding: 10,
                backgroundColor: "#f5f5f5",
                borderRadius: 5,
              }}
            >
              {secret.name}
            </h4>
            <h5
              style={{
                opacity: 0.6,
              }}
            >
              Secret Value
            </h5>
            <h4
              style={{
                padding: 10,
                backgroundColor: "#f5f5f5",
                borderRadius: 5,
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
              }}
            >
              {secret.data}
              <MdContentCopy
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleClose();
                  navigator.clipboard.writeText(secret.data);
                  setShowToast(true);
                }}
              />
            </h4>
            {secret.parentId ? (
              <>
                <h5>Shared with you by {secret.owner}</h5>
              </>
            ) : null}
          </Stack>
        </Modal.Body>
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
            <strong className="me-auto">Copied!</strong>
          </Toast.Header>
          <Toast.Body>
            {secret.name} has been copied to your clipboard!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
