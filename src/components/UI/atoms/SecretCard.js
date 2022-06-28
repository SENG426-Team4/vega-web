import { useState } from "react";
import { Card, Button, Row, Stack } from "react-bootstrap";

export function SecretCard({ secret }) {
  const [showSecret, setShowSecret] = useState(false);
  return (
    <Card style={{ width: "15rem", margin: 4 }}>
      <Card.Body>
        <Card.Title>{secret.name}</Card.Title>
        <Card.Text
          style={{
            background: showSecret ? "transparent" : "#333333",
            borderRadius: "0.2em",
            color: showSecret ? "inherit" : "transparent",
            cursor: "pointer",
            transition: "all 0.3s ease-in-out",
            border: "1px solid #333333",
            padding: 3,
          }}
          onClick={() => setShowSecret(!showSecret)}
        >
          {secret.data}
        </Card.Text>
        <Stack direction="horizontal" gap={3}>
          <Button variant="primary">Modify</Button>
          <Button variant="danger">Delete</Button>
        </Stack>
      </Card.Body>
    </Card>
  );
}
