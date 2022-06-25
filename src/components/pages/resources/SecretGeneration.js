import { Stack, Form, Button, ToastContainer, Toast } from "react-bootstrap";
import { useState } from "react";
import { MdContentCopy } from "react-icons/md";

var generator = require("generate-password");

const generateSecret = (length) => {
  try {
    return generator.generate({
      length: length,
      numbers: true,
      symbols: true,
      uppercase: true,
      lowercase: true,
    });
  } catch {
    return null;
  }
};

export function SecretGeneration({ user }) {
  const [secretLength, setSecretLength] = useState(20);
  const [generatedSecret, setGeneratedSecret] = useState(
    generateSecret(secretLength)
  );
  const [showToast, setShowToast] = useState(false);
  const handleCopySecret = () => {
    navigator.clipboard.writeText(generatedSecret);
    setShowToast(true);
  };
  var generateSecretHTML;
  if (
    user.role === "ROLE_USER" ||
    user.role === "ROLE_ADMIN" ||
    user.role === "ROLE_STAFF"
  ) {
    generateSecretHTML = (
      <Stack
        style={{
          marginTop: 10,
          maxWidth: "900px",
          display: "flex",
          justifyContent: "center",
        }}
        gap={3}
      >
        <h2>Secret Generation</h2>
        <Stack
          direction="horizontal"
          gap={2}
          style={{
            alignItems: "baseline",
            display: "flex",
          }}
        >
          <Form.Label style={{ fontSize: "1.15em", fontWeight: "bold" }}>
            Length
          </Form.Label>
          <Form.Control
            style={{
              flexShrink: 1,
              maxWidth: "300px",
              minWidth: "100px",
            }}
            type="number"
            value={secretLength}
            onChange={(e) => setSecretLength(e.target.value)}
          />
          <Button
            variant="primary"
            type="submit"
            onClick={() => setGeneratedSecret(generateSecret(secretLength))}
            style={{
              flexGrow: 1,
            }}
          >
            Generate Secret
          </Button>
        </Stack>

        <Stack direction="horizontal">
          <Form.Control readOnly type="text" value={generatedSecret} />
          <Button onClick={() => handleCopySecret()}>
            <MdContentCopy />
          </Button>
        </Stack>
      </Stack>
    );
  }
  return (
    <>
      {generateSecretHTML}
      <ToastContainer
        style={{
          zIndex: 9999,
          marginBottom: "30px",
        }}
        position="bottom-center"
      >
        <Toast
          bg="info"
          delay={3000}
          onClose={() => setShowToast(false)}
          autohide
          show={showToast}
        >
          <Toast.Header>
            <strong className="me-auto">Copied!</strong>
          </Toast.Header>
          <Toast.Body>The secret has been copied to your clipboard!</Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
}
