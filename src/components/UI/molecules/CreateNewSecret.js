import { Button } from "react-bootstrap";
import { useState, useContext } from "react";
import { secretCreator } from "../../../service/VegaVault/VegaVaultManager";
import { UserContext } from "../../../auth/UserProvider";
import { NewSecretModal } from "./NewSecretModal";

export function CreateNewSecret() {
  const [secretName, setSecretName] = useState("");
  const [secretValue, setSecretValue] = useState("");

  const { user } = useContext(UserContext);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = () => {
    if (secretName && secretValue) {
      secretCreator(
        {
          secretName,
          secretValue,
          userId: user.username.replace(/@venus.com/g, ""),
        },
        user.jwt
      ).then((res) => {
        setSecretName("");
        setSecretValue("");
        console.log(res);
      });
    } else {
      alert("Enter both a secret name and its value!");
    }
  };

  return (
    <>
      <Button onClick={handleShow}>Create New Secret</Button>
      <NewSecretModal
        show={show}
        handleSubmit={handleSubmit}
        setSecretName={setSecretName}
        secretName={secretName}
        setSecretValue={setSecretValue}
        secretValue={secretValue}
        handleClose={handleClose}
      />
    </>
  );
}
