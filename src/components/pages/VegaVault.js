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
  const { user } = useContext(UserContext);

  const [secrets, setSecrets] = useState([]);
  const [updateSecrets, setUpdateSecrets] = useState(true);

  useEffect(() => {
    if (updateSecrets) {
      secretReader(user.username.replace(/@venus.com/g, ""), user.jwt).then(
        (res) => {
          setSecrets(res);
          setUpdateSecrets(false);
          console.log(res);
        }
      );
    }
  }, [user, updateSecrets]);

  return (
    <SimplePageLayout>
      <div
        style={{
          maxWidth: "900px",
        }}
      >
        <Stack direction="horizontal" gap={5}>
          <h1>Vega Vault</h1>
          <CreateNewSecret setUpdateSecrets={setUpdateSecrets} />
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
                key={secret.id}
              >
                <SecretRow
                  setUpdateSecrets={setUpdateSecrets}
                  secret={secret}
                />
              </ListGroup.Item>
            ))}
          </ListGroup>
        ) : null}
      </div>
    </SimplePageLayout>
  );
}
