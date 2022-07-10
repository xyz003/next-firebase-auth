import { Button, Container, Row, Col } from "react-bootstrap";
import "../components/icons";
import { UserContext } from "./usecontext";
import { useContext, useEffect, useState } from "react";
import Router from 'next/router'


export default function Home() {
  const { user } = useContext(UserContext)
  const [username, setusername] = useState("")

  useEffect(() => {
    if (!sessionStorage.name) {
      Router.push('/login')
    } else {
      setusername(sessionStorage.name)
    }
  }, [])

  return (
    <>
      <Col className="text-center m-5 h-20vh">
        <Container>
          <Row>
            <Col md="12" className="m-4">
              <h1 className="title">Welcome {username}</h1>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="m-4">
              <Button variant="primary" className="btn-lg w-25" onClick={() => Router.push('/createevent')}>Create event</Button>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
}
