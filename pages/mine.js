import { useContext, useEffect, useState } from "react"
import { Container, Row, Col } from "react-bootstrap";
import Link from "next/link";
import "../components/icons";

import { UserContext } from "./usecontext";
import Router from 'next/router'

const mine = () => {
  const { user } = useContext(UserContext)
  const [title, settitle] = useState("")
  const [Url, setUrl] = useState("")

  useEffect(() => {
    if (sessionStorage.title) {
      settitle(sessionStorage.title)
      setUrl(sessionStorage.Url)
    } else {
      Router.push('/login')
    }
  }, [])

  return (
    <>
      <Col className="text-center m-5 h-20vh">
        <Container>
          <Row>
            <Col md="12" className="mt-4 mb-4">
              <h1 className="title">{title}</h1>
            </Col>
          </Row>
          <Row>
            <Link href={`${Url}`}>
              <p className="title"><b className="point">{Url}</b></p>
            </Link>
          </Row>
        </Container>
      </Col>
    </>
  );
}

export default mine