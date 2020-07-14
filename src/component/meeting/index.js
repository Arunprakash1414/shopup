import React, { Component } from "react";
import { connect } from "react-redux";
import { setBuildingTypes } from "../../store/actions";
import { Container, Button } from "react-bootstrap";
import Header from "../home/header";
import AddMeeting from "./addmeeting";
import Rooms from "./rooms";


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: "Building",
            addmeeting: false
        }
    }
    componentDidMount() {
        this.setState({ dropdown: this.props.match.params.building })
    }

    listMeeting = () => {
        this.setState({ addmeeting: true });
    }

    render() {
        return (
            <div>
                {this.props.buildings !== undefined ? <Header buildings={this.props.buildings}
                    dropdown={this.state.dropdown}
                    disabled={true}
                /> : null}
                <Container style={{ marginTop: "30px" }}>
                    {!this.state.addmeeting ? <AddMeeting dropdown={this.state.dropdown}
                        listMeeting={this.listMeeting}
                    /> :
                        <Rooms dropdown={this.state.dropdown}
                        />}
                </Container>
            </div>
        )
    }
}


const mapStateToProps = (store) => {
    return {
        buildings: store.home.buildingTypes
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        //  setBuildingData: () => dispatch(setBuildingTypes())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);