import react, { useState } from "react"
import { Button, Container, Row, Col } from "react-bootstrap";
import Router from 'next/router'
import "../components/icons";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { Firestore } from "./api/firebase";
import { collection, addDoc } from "firebase/firestore";

const Home = () => {
  const [email, setemail] = useState("")
  const [password, setpassword] = useState("")
  const [username, setuser] = useState("")

  const regster = (setEmail, setPassword) => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        try {
          const docRef = addDoc(collection(Firestore, "users"), {
            uid: user.uid,
            username: username,
            email: email
          });
          Router.push('/login')
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(error.message)
      });
  }

  return (
    <>
      <Col className="text-center m-5 h-20vh">
        <Container>
          <Row>
            <Col md="12" className="mt-4 mb-4">
              <h1 className="title">Sign up</h1>
            </Col>
          </Row>
          <Row>
            <Col md="12" className="mt-4 mb-4">
              <input className="inputval" type="text" name="Ruslan" value={username} onChange={(e) => setuser(e.target.value)} placeholder="Username" required />
            </Col>
            <Col md="12" className="mb-4 mt-0">
              <input className="inputval" type="text" name="" value={email} onChange={(e) => setemail(e.target.value)} placeholder="Email" required />
            </Col>
            <Col md="12" className="mb-4 mt-0">
              <input className="inputval" type="password" name="" value={password} onChange={(e) => setpassword(e.target.value)} placeholder="PassWord" required />
            </Col>
          </Row>
          <Row>
            <Col md="12">
              <Button variant="primary" className="m-2 p-3 w-25" onClick={() => regster(email, password)}>Sign up</Button>
              {/* <Button variant="primary" className="m-2 p-3 w-25" onClick={() => Router.push('./login')}>Log in</Button> */}
            </Col>
          </Row>
        </Container>
      </Col>
    </>
  );
}

export default Home