import React from "react";
import { Container } from "react-bootstrap";
import { InputTask } from "../components/InputTask";
import Menu from "../components/Menu";
import { TableTask } from "../components/TableTask";

export const Home = () => {
  return (
    <>
      <Menu />
      <Container style={{ maxWidth: "80vw", width: "100%", margin:"0 auto"}}>
        <Container style={{ width: "70%", margin:"0 auto"}}>
          <Container>
            <InputTask/>
          </Container>
          <Container>
            <TableTask />
          </Container>
        </Container>
      </Container>
    </>
  );
};
