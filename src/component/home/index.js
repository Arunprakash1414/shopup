import React, { Component } from "react";
import { connect } from "react-redux";
import { setBuildingTypes } from "../../store/actions";
import { Container, Button } from "react-bootstrap";
import Header from "./header";
import Blocks from "./blocks";

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdown: "Building"
        }
    }
    componentDidMount() {
        this.props.setBuildingData();
    }
    selectDropdown = (data) => {
        this.setState({ dropdown: data });
    }
    redirectPage = () => {
        this.props.history.push('/meeting/' + this.state.dropdown);
    }
    render() {
        return (
            <div>
                {this.props.buildings !== undefined ? <Header buildings={this.props.buildings}
                    dropdown={this.state.dropdown}
                    selectDropdown={this.selectDropdown}
                    disabled={false}
                /> : null}
                <Container style={{ marginTop: "30px" }}>
                    {this.state.dropdown == "Building" ? <h3 style={{ textAlign: "center" }}>Please select the Building Dropdown</h3> :
                        <div>
                            <Blocks dropdown={this.state.dropdown} />
                            <Button variant="success" size="lg" block onClick={this.redirectPage}>
                                + ADD MEETING
                    </Button>
                        </div>}
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
        setBuildingData: () => dispatch(setBuildingTypes())
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Home);