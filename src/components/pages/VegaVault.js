import {
  secretCreator,
  secretReader,
} from "../../service/VegaVault/VegaVaultManager";
import SimplePageLayout from "../templates/SimplePageLayout";
import { UserContext } from "../../auth/UserProvider.js";
import { useContext, useEffect, useState } from "react";
import { SecretCard } from "../UI/atoms/SecretCard";
import { Button, ListGroup, Stack } from "react-bootstrap";
import { NewSecretModal } from "../UI/molecules/NewSecretModal";
import { MdEdit, MdDelete } from "react-icons/md";
import SecretRow from "../UI/atoms/SecretRow";
import { CreateNewSecret } from "../UI/molecules/CreateNewSecret";

export function VegaVaultPage() {
  const [secretName, setSecretName] = useState("");
  const [secretValue, setSecretValue] = useState("");

  const { user } = useContext(UserContext);

  const [secrets, setSecrets] = useState([]);

  useEffect(() => {
    if (secretName === "" && secretValue === "") {
      secretReader(user.username.replace(/@venus.com/g, ""), user.jwt).then(
        (res) => {
          setSecrets(res);
          console.log(res);
        }
      );
    }
  }, [user, secretName, secretValue]);

  return (
    <SimplePageLayout>
      <div
        style={{
          maxWidth: "900px",
        }}
      >
        <Stack direction="horizontal" gap={5}>
          <h1>Vega Vault</h1>
          <CreateNewSecret
            secretName={secretName}
            setSecretName={setSecretName}
            secretValue={secretValue}
            setSecretValue={setSecretValue}
          />
        </Stack>

        <hr />
        {secrets && secrets.length > 0 ? (
          <ListGroup>
            {secrets.map((secret) => (
              <ListGroup.Item
                action
                style={{
                  cursor: "default",
                }}
              >
                <SecretRow secret={secret} />
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : null}
      </div>
    </SimplePageLayout>
  );
}
