import { Button, Modal, Stack, ToastContainer, Toast } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

export function SeeSecret({ smallScreen, secretTitle, secretValue }) {
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
          <Stack>
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
              {secretTitle}
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
              {secretValue}
              <MdContentCopy
                style={{
                  cursor: "pointer",
                }}
                onClick={() => {
                  handleClose();
                  navigator.clipboard.writeText(secretValue);
                  setShowToast(true);
                }}
              />
            </h4>
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
            {secretTitle} has been copied to your clipboard!
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
