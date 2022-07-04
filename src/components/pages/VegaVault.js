import {
  secretCreator,
  secretReader,
  secretReaderFiltered,
} from "../../service/VegaVault/VegaVaultManager";
import SimplePageLayout from "../templates/SimplePageLayout";
import { UserContext } from "../../auth/UserProvider.js";
import { useContext, useEffect, useState } from "react";
import { SecretCard } from "../UI/atoms/SecretCard";
import { Button, ListGroup, Stack, Form } from "react-bootstrap";
import { NewSecretModal } from "../UI/molecules/NewSecretModal";
import { MdEdit, MdDelete } from "react-icons/md";
import SecretRow from "../UI/atoms/SecretRow";
import { CreateNewSecret } from "../UI/molecules/CreateNewSecret";

export function VegaVaultPage() {
  const { user } = useContext(UserContext);

  const [secrets, setSecrets] = useState([]);
  const [updateSecrets, setUpdateSecrets] = useState(true);
  const [fromDate, setFromDate] = useState();
  const [toDate, setToDate] = useState();

  useEffect(() => {
    if (updateSecrets) {
      if (fromDate && toDate) {
        secretReaderFiltered(
          user.username.replace(/@venus.com/g, ""),
          fromDate,
          toDate,
          user.jwt
        ).then((res) => {
          setSecrets(res);
          setUpdateSecrets(false);
        });
      } else {
        secretReader(user.username.replace(/@venus.com/g, ""), user.jwt).then(
          (res) => {
            setSecrets(res);
            setUpdateSecrets(false);
            console.log(res);
          }
        );
      }
    }
  }, [user, updateSecrets, fromDate, toDate]);

  useEffect(() => {
    console.log("From", fromDate, "to", toDate, "today", Date.now());
    if (fromDate && toDate) {
      setUpdateSecrets(true);
    }
  }, [fromDate, toDate]);

  const handleResetDates = () => {
    if (fromDate || toDate) {
      setFromDate("");
      setToDate("");
      setUpdateSecrets(true);
    }
  };

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
        <Stack direction="horizontal" gap={3}>
          <h4>Filter from</h4>
          <input
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
          />
          <h4>to</h4>
          <input
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
          />
          <Button onClick={handleResetDates} variant="danger">
            Reset Filter
          </Button>
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
