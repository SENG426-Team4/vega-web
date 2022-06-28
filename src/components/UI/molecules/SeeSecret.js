import { Button, Stack } from "react-bootstrap";
import { AiFillEye } from "react-icons/ai";

export function SeeSecret({ smallScreen }) {
  return (
    <Button variant="dark">
      <Stack direction="horizontal" gap={2}>
        <AiFillEye />
        {smallScreen ? "" : "See"}
      </Stack>
    </Button>
  );
}
