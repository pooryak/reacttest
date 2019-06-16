import React from "react";
import articon from "../assets/img/Art.png";
import styles from "./ArtContentShow.module.css";
import { Row, Col, CardBody, Input, Button, Label } from "reactstrap";

const Art = props => {
  return (
    <CardBody className={styles["container"]}>
      <Row className={styles["containimg"]}>
        <img src={articon} className={styles["artimg"]} />
      </Row>
      <Row className={styles["rowcontainer"]}>
        <Col>
          <Label>Description:</Label>
          <Input
            type="text"
            name="description"
            value={props.description}
            onChange={e => props.handlechange(e)}
          />
          <Label>Title:</Label>
          <Input
            type="text"
            name="title"
            value={props.title}
            onChange={e => props.handlechange(e)}
          />
        </Col>
      </Row>
      <Row className={styles["rowcontainer"]}>
        <Col className={styles["colcontainer"]}>
          {props.image && <img className={styles["img"]} src={props.image} />}
        </Col>
      </Row>
      <Row className={styles["rowcontainer"]}>
        <Col>
          <Button onClick={props.handlesave}>save</Button>
        </Col>
      </Row>
    </CardBody>
  );
};
export default Art;
