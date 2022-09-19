import React from "react";
import { Link } from "react-router-dom";

import styles from "../../styles/SignInUpForm.module.css";
import btnStyles from "../../styles/Button.module.css";
import appStyles from "../../App.module.css";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";

const SignUpForm = () => {
  return (
    <Row className={styles.Row}>
      <Col className="my-auto py-2 p-md-2" md={6}>
        <Container className={`${appStyles.Content} p-4 `}>
          <h1 className={styles.Header}>sign up</h1>

          <Form>
            <Form.Group controlId="username">
              <Form.Control
                className={styles.Input}
                type="text"
                placeholder="Username"
                name="username"
              />
            </Form.Group>

            <Form.Group controlId="password1">
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Password"
                name="password1"
              />
            </Form.Group>

            <Form.Group controlId="password2">
              <Form.Control
                className={styles.Input}
                type="password"
                placeholder="Confirm password"
                name="password2"
              />
            </Form.Group>

            <Button
              className={`${btnStyles.Button} ${btnStyles.Wide} ${btnStyles.Bright}`}
              type="submit"
            >
              Sign up
            </Button>
          </Form>
        </Container>
        <Container className={`mt-3 ${appStyles.Content}`}>
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>
        </Container>
      </Col>
      <Col
        md={6}
        className={`my-auto d-none d-md-block p-2 ${styles.SignUpCol}`}
      >
        <Image
          className={`${appStyles.FillerImage}`}
          src={
            "https://images.pexels.com/photos/9227510/pexels-photo-9227510.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
        />
      </Col>
    </Row>
  );
};

export default SignUpForm;
