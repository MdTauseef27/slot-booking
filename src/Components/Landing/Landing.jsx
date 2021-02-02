import React from "react";
import { Form, Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
export const Landing = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>Booking System</h1>
      <Card style={{ marginTop: "10px" }}>
        <Container>
          <Form style={{ marginTop: "10px" }}>
            <Row style={{ marginTop: "15" }}>
              <Col>
                <Form.Label>Buisness Name</Form.Label>
              </Col>
              <Col>
                <Form.Control
                  type="email"
                  placeholder="Enter Your Buisness Name"
                />
              </Col>
            </Row>
            <Row style={{ marginTop: "15px" }}>
              <Col>
                <Form.Label>Type Of Buisness</Form.Label>
              </Col>
              <Col>
                <Form.Control as="select">
                  <option>Hostel Bed System</option>
                  <option>Hospital Generel Bed System</option>
                  <option>Restaurent Table System</option>
                </Form.Control>
              </Col>
            </Row>
            <Row style={{ marginTop: "15px" }}>
              <Col>
                <Form.Label>No Of Floors</Form.Label>
              </Col>
              <Col>
                <Form.Control type="email" placeholder="No Of Floors" />
              </Col>
            </Row>
            <Row style={{ marginTop: "15px" }}>
              <Col>
                <Form.Label>No Of Rooms Per Floor</Form.Label>
              </Col>
              <Col>
                <Form.Control type="email" placeholder="No Of Rooms" />
              </Col>
            </Row>
            <Row style={{ marginTop: "15px" }}>
              <Col>
                <Form.Label>No Of Beds Per Room</Form.Label>
              </Col>
              <Col>
                <Form.Control type="email" placeholder="No Of Beds" />
              </Col>
              <h1></h1>
            </Row>
          </Form>
          <Button
            variant="outline-secondary"
            style={{
              color: "black",
              backgroundColor: "#F8F8F8",
              marginLeft: "430px",
              marginTop: "15px",
              marginBottom: "10px",
            }}
          >
            Submit
          </Button>
          <Button
            variant="outline-secondary"
            style={{
              marginLeft: "10px",
              color: "black",
              backgroundColor: "#F8F8F8",

              marginTop: "15px",
              marginBottom: "10px",
            }}
          >
            Cancel
          </Button>
        </Container>
      </Card>
    </div>
  );
};
