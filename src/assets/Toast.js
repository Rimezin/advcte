import React from "react";
import Toast from "react-bootstrap";

export default function Toast(props) {
  const { message, icon, title, time, toast, setToast } = props;

  return (
    <Row>
      <Col xs={6}>
        <Toast
          onClose={() => setToast(false)}
          show={toast}
          delay={3000}
          autohide
        >
          <Toast.Header>
            <i className={icon}></i>
            <strong className="me-auto">{title}</strong>
            <small>{time}</small>
          </Toast.Header>
          <Toast.Body>{message}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}
