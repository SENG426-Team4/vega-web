import { useEffect, useState } from "react";
import { Stack } from "react-bootstrap";
import { SeeSecret } from "../molecules/SeeSecret";
import { ModifySecret } from "../molecules/ModifySecret";
import { DeleteSecret } from "../molecules/DeleteSecret";
import { ShareSecret } from "../molecules/ShareSecret";

export default function SecretRow({ secret, setUpdateSecrets }) {
  const [smallScreen, setSmallScreen] = useState(
    window !== undefined && window.matchMedia("(max-width: 768px)").matches
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
      {secret.parentId ? <h5>Shared with you by {secret.owner}</h5> : null}
      <Stack
        className="ms-auto"
        direction="horizontal"
        style={{
          alignItems: "center",
        }}
        gap={smallScreen ? 1 : 4}
      >
        <SeeSecret smallScreen={smallScreen} secret={secret} />
        {!secret.parentId ? (
          <>
            <ModifySecret
              smallScreen={smallScreen}
              secret={secret}
              setUpdateSecrets={setUpdateSecrets}
            />
            <DeleteSecret
              secret={secret}
              smallScreen={smallScreen}
              setUpdateSecrets={setUpdateSecrets}
            />
            <ShareSecret
              secret={secret}
              smallScreen={smallScreen}
              setUpdateSecrets={setUpdateSecrets}
            />
          </>
        ) : null}
      </Stack>
    </Stack>
  );
}
