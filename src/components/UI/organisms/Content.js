import { Row } from "react-bootstrap";
const Content = ({ children }) => {
  return (
    <Row
      style={{
        width: "100vw",
        display: "flex",
        justifyContent: "center",
        margin: 0,
        paddingTop: 10,
      }}
    >
      {children}
    </Row>
  );
};
export default Content;
