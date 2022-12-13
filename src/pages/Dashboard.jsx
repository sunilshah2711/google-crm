import React from "react";
// import Sidebar from "../components/Sidebar";
import SideMenu from "../components/Sidebar2";
import { Row, Col, Container } from "react-bootstrap";

const Dashboard = () => {
  return (
    <>
      <Container fluid>
        <Row>
          <Col className="ps-0" sm={12} md={3} lg={2}>
            {/* <Sidebar /> */}
            <SideMenu />
          </Col>
          <Col className="p-0" sm={12} md={9} lg={10}></Col>
        </Row>
      </Container>
    </>
  );
};

export default Dashboard;
