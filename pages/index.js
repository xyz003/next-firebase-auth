import {
  Button,
  Container,
  Row,
  Col,
} from "react-bootstrap";
import Link from "next/link";
import "../components/icons";
import { useEffect } from "react";

export default function Home() {

  useEffect(() => {
    sessionStorage.clear()
  }, [])

  return (
    <>
      <Col className="text-center m-5 h-20vh">
        <Container>
          <Row>
            <Col md="12" className="m-4">
              <h1 className="title">Welcome, Please login or signup first</h1>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="m-4">
              <Link href="/login">
                <Button variant="primary" className="btn-lg w-25" href="./">Log In</Button>
              </Link>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="m-4">
              <Link href="/signup">
                <Button variant="primary" className="btn-lg w-25">Sign Up</Button>
              </Link>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
}
