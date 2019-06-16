import React from "react";
import articon from "../assets/img/Art.png";
import styles from "./ArtContentShow.module.css";
import { Row, Col, CardBody, Input, Button, Label } from "reactstrap";
import Art from "./Art";

class ArtContentShow extends React.Component {
  componentDidMount() {
    const { title, description, image } = this.props.data;
    this.setState({
      title,
      description,
      image
    });
  }
  state = {
    title: "",
    description: "",
    image: ""
  };

  handlechange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handlesave = () => {
    this.props.handlechange(this.state);
  };

  render() {
    return (
      <Art
        description={this.state.description}
        title={this.state.title}
        handlechange={this.handlechange}
        image={this.state.image}
        handlesave={this.handlesave}
      />
    );
  }
}

export default ArtContentShow;
