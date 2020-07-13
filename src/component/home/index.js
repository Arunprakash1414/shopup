import React, { Component } from "react";
import { connect } from "react-redux";
import { setBuildingTypes } from "../../store/actions";
import { Container, Button } from "react-bootstrap";
import Header from "./header";
import Blocks from "./blocks";

class Home extends Component {

    componentDidMount() {
        this.props.setBuildingData();
    }
    render() {
        return (
            <div>
                {this.props.buildings !== undefined ? <Header buildings={this.props.buildings} /> : null}
                <Container style={{ marginTop: "30px" }}>
                    <Blocks />
                    <Button variant="success" size="lg" block>
                        + ADD MEETING
                    </Button>
                </Container>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    console.log(store)
    return {
        buildings: store.home.buildingTypes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setBuildingData: () => dispatch(setBuildingTypes())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);