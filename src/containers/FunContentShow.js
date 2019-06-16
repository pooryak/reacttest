import React from "react";
import styles from "./FunContentShow.module.css";
import funicon from "../assets/img/Fun.png";
import { Row, Col, CardBody, Input, Button, Label } from "reactstrap";
import { Spring } from "react-spring/renderprops";
var audio;

class FunContentShow extends React.Component {
  componentDidMount() {
    const { title, description, image, sound, code } = this.props.data;
    this.setState({
      title,
      description,
      image,
      sound,
      code
    });
  }
  state = {
    title: "",
    description: "",
    image: "",
    sound: "",
    code: ""
  };
  constructor(props) {
    super(props);
    audio = new Audio(this.props.data.sound);
  }

  // updating state on props change
  static getDerivedStateFromProps(props, state) {
    if (props.data.code !== state.code) {
      return props.data;
    }
  }

  handlechange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlesave = () => {
    this.props.handlechange(this.state);
  };

  render() {
    return (
      <CardBody className={styles["container"]}>
        <Row className={styles["containimg"]}>
          <img src={funicon} className={styles["artimg"]} />
        </Row>
        <Row className={styles["rowcontainer"]}>
          <Col>
            {this.state.code == 1 ? (
              <Spring
                from={{
                  opacity: 0,
                  marginTop: -1000
                }}
                to={{
                  opacity: 1,
                  marginTop: 0
                }}
              >
                {props => (
                  <div className="box" style={props}>
                    <Label>Description:</Label>
                    <Input
                      type="text"
                      name="description"
                      value={this.state.description}
                      onChange={this.handlechange}
                    />
                    <Label>Title:</Label>
                    <Input
                      type="text"
                      name="title"
                      value={this.state.title}
                      onChange={this.handlechange}
                    />
                  </div>
                )}
              </Spring>
            ) : (
              <>
                <Label>Description:</Label>
                <Input
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handlechange}
                />
                <Label>Title:</Label>
                <Input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handlechange}
                />
              </>
            )}
          </Col>
        </Row>
        <Row className={styles["rowcontainer"]}>
          <Col className={styles["colcontainer"]}>
            {this.state.code == 0 ? (
              <img className={styles["img"]} src={this.state.image} />
            ) : null}
          </Col>
        </Row>
        <Row className={styles["rowcontainer"]}>
          <Col className={styles["colcontainer"]}>
            {this.state.code == 2 ? (
              <audio ref="audio_tag" src={this.state.sound} controls autoPlay />
            ) : null}
          </Col>
        </Row>
        <Row className={styles["rowcontainer"]}>
          <Col>
            <Button onClick={this.handlesave}>save</Button>
          </Col>
        </Row>
      </CardBody>
    );
  }
}

export default FunContentShow;
