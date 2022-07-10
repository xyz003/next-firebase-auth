import { Button, Container, Row, Col } from "react-bootstrap";
import "../components/icons";
import { UserContext } from "./usecontext";
import { useContext, useEffect, useState } from "react";
import Router from 'next/router'

import { Firestore } from "./api/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Home() {
  const { user } = useContext(UserContext)

  useEffect(() => {
    if (!sessionStorage.name) {
      Router.push('/login')
    }
  }, [])

  const [title, settitle] = useState('')
  const [Url, setUrl] = useState('')

  const evetCreate = () => {
    try {
      const docRef = addDoc(collection(Firestore, "zooms"), {
        uid: sessionStorage.uid,
        title,
        Url
      });
      Router.push('/yours')
    } catch (e) {
      console.log("Error adding document: ", e);
    }
  }

  return (
    <>
      <Col className="text-center m-5 h-20vh">
        <Container>
          <Row>
            <Col md="12" className="mt-4 mb-4">
              <h1 className="title">Create Event</h1>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="mt-4 mb-4">
              <input className="inputval" type="text" name="" placeholder="Title" required value={title} onChange={(e) => settitle(e.target.value)} />
            </Col>
            <Col md="12" className="mt-4 mb-4 mt-0">
              <input className="inputval" type="text" name="" placeholder="Zoom Url" required value={Url} onChange={(e) => setUrl(e.target.value)} />
            </Col>
          </Row>
          <Row>
            <Col md="12" className="mt-4 mb-4">
              <Button variant="primary" className="btn-lg w-25" onClick={() => evetCreate()}>Create event</Button>
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
}
