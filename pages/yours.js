import { Container, Row, Col } from "react-bootstrap";
import { UserContext } from "./usecontext";
import { useContext, useEffect, useState } from "react";
import Router from 'next/router'

import { Firestore } from "./api/firebase";
import { collection, query, where, getDocs } from "firebase/firestore";

export default function Home() {

  const { user, setUserDetails } = useContext(UserContext)
  const [data, setdata] = useState([])

  useEffect(() => {
    if (!sessionStorage.name) {
      Router.push('/login')
    } else {
      const q = query(collection(Firestore, "zooms"), where("uid", "==", sessionStorage.uid));
      getDocs(q).then((querySnapshot) => {
        let makedata = []
        querySnapshot.forEach((doc) => {
          makedata.push(doc.data())
        })
        setdata(makedata)
      }).catch((error) => {
        alert(error.message)
      });
    }
  }, [])

  const selectOne = (params) => {
    sessionStorage.title = params.title
    sessionStorage.Url = params.Url
    Router.push('/mine')
  }

  return (
    <>
      <Col className="text-center m-5 h-20vh">
        <Container>
          <Row>
            <Col md="12" className="mt-4 mb-4">
              <h1 className="title">Your events</h1>
            </Col>
          </Row>
          {
            data.length ? data.map((item, i) => (
              <Row key={i}>
                <Col md="12" className="m-1">
                  <h4 className="title" onClick={() => selectOne(item)}><span className="point">{item.title}</span></h4>
                </Col>
                <p className="title" onClick={() => selectOne(item)}>
                  <span className="point"><b>{item.Url}</b></span>
                </p>
              </Row>
            )) : null
          }
        </Container>
      </Col>
    </>
  );
}
