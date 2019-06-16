import React from "react";
import { connect } from "react-redux";
import styles from "./Container.module.css";
import SportContentShow from "./SportContentShow";
import ArtContentShow from "./ArtContentShow";
import FunContentShow from "./FunContentShow";
import { nextitem } from "../actions/index";
import { change } from "../actions/index";
import { Spinner, Col, Card, CardHeader, CardFooter } from "reactstrap";

class Container extends React.Component {
  // update Counter
  handleclick = e => {
    this.props.nextitem();
  };

  sendchanges = data => {
    data["index"] = this.props.counter;
    this.props.change(data);
  };

  render() {
    if (this.props.errorinfetch) {
      return <div>No Data</div>;
    }

    if (this.props.isloading) {
      return <Spinner color="warning" />;
    }

    if (!this.props.isloading) {
      return (
        <div className={styles["main"]}>
          <Col>
            <Card>
              <CardHeader className={styles["tag"]}>
                {this.props.data.cards[this.props.counter].tag}
              </CardHeader>
              {/* check tags */}
              {(() => {
                switch (this.props.data.cards[this.props.counter].tag) {
                  case "sport":
                    return (
                      <SportContentShow
                        data={this.props.data.cards[this.props.counter]}
                        handlechange={this.sendchanges}
                      />
                    );
                  case "fun":
                    return (
                      <FunContentShow
                        data={this.props.data.cards[this.props.counter]}
                        handlechange={this.sendchanges}
                      />
                    );
                  case "art":
                    return (
                      <ArtContentShow
                        data={this.props.data.cards[this.props.counter]}
                        handlechange={this.sendchanges}
                      />
                    );
                  default:
                    return null;
                }
              })()}

              <CardFooter
                onClick={this.handleclick}
                className={styles["footerbutton"]}
              >
                Try
              </CardFooter>
            </Card>
          </Col>
        </div>
      );
    }
  }
}

const mapStateToProps = state => {
  return {
    data: state.data,
    counter: state.counter,
    error: state.errorinfetch,
    isloading: state.isloading
  };
};

function mapDispatchToProps(dispatch) {
  return {
    nextitem: adad => dispatch(nextitem()),
    change: (changes, index) => dispatch(change(changes, index))
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Container);
