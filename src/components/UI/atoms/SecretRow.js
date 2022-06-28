import { useEffect, useState } from "react";
import { Stack, Button } from "react-bootstrap";
import { MdEdit, MdDelete } from "react-icons/md";
import { SeeSecret } from "../molecules/SeeSecret";
import { ModifySecret } from "../molecules/ModifySecret";

export default function SecretRow({ secret, setUpdateSecrets }) {
  const [smallScreen, setSmallScreen] = useState(
    window.matchMedia("(max-width: 768px)").matches
  );
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
        gap={smallScreen ? 1 : 4}
      >
        <SeeSecret smallScreen={smallScreen} secret={secret} />
        <ModifySecret
          smallScreen={smallScreen}
          secret={secret}
          setUpdateSecrets={setUpdateSecrets}
        />
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
