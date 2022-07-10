import React, { useContext, useEffect, useState } from "react"
import { Button, Container, Row, Col, Form, } from "react-bootstrap";
import { UserContext } from "./usecontext";
import Router from 'next/router'
import "../components/icons";

import { Firestore } from "./api/firebase";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { collection, query, where, getDocs } from "firebase/firestore";


const Login = () => {

  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const { user, setUserDetails } = useContext(UserContext)

  const login = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const userinfo = userCredential.user;

        const q = query(collection(Firestore, "users"), where("uid", "==", userinfo.uid));

        const querySnapshot = await getDocs(q);
        let makeuser = {}

        querySnapshot.docs.forEach((doc) => {
          makeuser = doc.data()
        });

        setUserDetails(makeuser)
        sessionStorage.name = makeuser.username
        sessionStorage.uid = makeuser.uid

      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message)
      });
  }

  useEffect(() => {
    if (user) {
      Router.push('/event')
    }
  }, [user])

  useEffect(() => {
    sessionStorage.clear()
  }, [])

  return (
    <>
      <Form>
        <Col className="text-center m-5 h-20vh">
          <Container>
            <Row>
              <Col md="12" className="mt-4 mb-4">
                <h1 className="title">Log in</h1>
              </Col>
            </Row>
            <Row>
              <Col md="12" className="mt-4 mb-4">
                <input className="inputval" type="email" name="" value={email} placeholder="Email" onChange={(e) => setemail(e.target.value)} required />
              </Col>
              <Col md="12" className="mb-4 mt-0">
                <input className="inputval" type="password" name="" value={password} placeholder="PassWord" onChange={(e) => setpassword(e.target.value)} required />
              </Col>
            </Row>
            <Row>
              <Col md="12">
                <Button variant="primary" className="m-2 p-3 w-25" onClick={() => login()}>Log in</Button>
                {/* <Button variant="primary" className="m-2 p-3 w-25" onClick={() => Router.push('./signup')}>Sign up</Button> */}
              </Col>
            </Row>
          </Container>
        </Col>
      </Form>
    </>
  );
}

export default Login



