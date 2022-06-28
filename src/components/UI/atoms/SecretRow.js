import { useEffect, useState } from "react";
import { Stack, Button } from "react-bootstrap";
import { MdEdit, MdDelete } from "react-icons/md";
import { AiFillEye } from "react-icons/ai";
import { SeeSecret } from "../molecules/SeeSecret";

export default function SecretRow({ secret }) {
  const [smallScreen, setSmallScreen] = useState();
  useEffect(() => {
    window.matchMedia("(max-width: 768px)").addEventListener("change", (e) => {
      console.log("Screen updated. Is small?", e.matches, e);
      setSmallScreen(e.matches);
    });
  }, []);

  return (
    <Stack
      direction="horizontal"
      gap={3}
      style={{
        alignItems: "flex-end",
      }}
    >
      <h5>{secret.name}</h5>
      <h6
        style={{
          opacity: 0.6,
        }}
      >
        {new Date(secret.timeCreated).toLocaleDateString("en-US", {
          year: "numeric",
          month: "long",
          day: "numeric",
          hour: "numeric",
          minute: "numeric",
          second: "numeric",
          timeZoneName: "short",
        })}
      </h6>
      <Stack
        className="ms-auto"
        direction="horizontal"
        style={{
          alignItems: "center",
        }}
        gap={4}
      >
        <SeeSecret />
        <Button>
          <Stack direction="horizontal" gap={2}>
            <MdEdit />
            {smallScreen ? "" : "Modify"}
          </Stack>
        </Button>
        <Button variant="danger">
          <Stack direction="horizontal" gap={2}>
            <MdDelete />
            {smallScreen ? "" : "Delete"}
          </Stack>
        </Button>
      </Stack>
    </Stack>
  );
}
