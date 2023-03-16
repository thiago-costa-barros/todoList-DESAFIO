import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import LogoSVG from "./svg/Logo";
import RetangleSVG from "./svg/Retangle";

export const Menu = () => {
  return (
    <Container
      style={{
        maxWidth: "100%",
        display: "flex",
      }}
      className="bg-gray-200 px-10"
    >
      <Navbar
        style={{
          margin: "0px",
        }}
      >
        <Container
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "row",
          }}
        >
          <Navbar.Brand href="#" className="mx-4">
            <LogoSVG />
          </Navbar.Brand>
          <Container className="my-3">
            <RetangleSVG className="h-14" />
          </Container>
          <Container
            className="mx-4"
            style={{
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
            }}
          >
            <span className="text-lg font-extrabold">TO DO LIST</span>
            <span className="text-md">Teste de capacidade técnica</span>
          </Container>
        </Container>
      </Navbar>
    </Container>
  );
};

export default Menu;
