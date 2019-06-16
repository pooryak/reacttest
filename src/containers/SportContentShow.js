import React from "react";
import styles from "./SportContentShow.module.css";
import sporticon from "../assets/img/Sport.png";
import { Row, CardBody, Input, Button, Label, Col } from "reactstrap";
import { Spring } from "react-spring/renderprops";

class Content_Show extends React.Component {
  componentDidMount() {
    const { title, description, image, code } = this.props.data;
    this.setState({
      title,
      description,
      image,
      code
    });
  }
  state = {
    code: "",
    image: "",
    title: "",
    description: ""
  };

  handlechange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlesave = () => {
    this.props.handlechange(this.state);
  };

  // updating state on props change
  static getDerivedStateFromProps(props, state) {
    if (props.data.code !== state.code) {
      return props.data;
    }
  }

  render() {
    return (
      <CardBody className={styles["container"]}>
        <Row className={styles["containimg"]}>
          <img src={sporticon} className={styles["img"]} />
        </Row>
        <Row>
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
        <Row>
          <Col>
            {this.state.code == 0 ? (
              <img className={styles["img"]} src={this.state.image} />
            ) : null}
          </Col>
        </Row>
        <Button onClick={this.handlesave}>save</Button>
      </CardBody>
    );
  }
}

export default Content_Show;
