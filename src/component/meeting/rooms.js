

import React, { Component } from "react";
import { Form, Button, Card } from "react-bootstrap";
import { getRoomsData } from "../../store/actions";
import { connect } from "react-redux";
import Swal from 'sweetalert2';
import { Redirect } from "react-router-dom";





class Rooms extends Component {
    state = {
        selectedIndex: null,
        redirects: false
    }
    componentDidMount() {
        this.props.getRoomsData(this.props.dropdown);
    }

    alertBox = () => {
        let timerInterval
        Swal.fire({
            title: 'Meeting room successfully booked.',
            // html: 'I will close in <b></b> milliseconds.',
            timer: 4000,
            timerProgressBar: true,
            onBeforeOpen: () => {
                Swal.showLoading()
                timerInterval = setInterval(() => {
                    const content = Swal.getContent()
                    if (content) {
                        const b = content.querySelector('b')
                        if (b) {
                            b.textContent = Swal.getTimerLeft()
                        }
                    }
                }, 100)
            },
            onClose: () => {
                clearInterval(timerInterval)
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                //  console.log('I was closed by the timer')
                this.setState({ redirects: true });
            }
        })
    }

    onSubmitForm = (e) => {
        e.preventDefault();
        //  console.log(Date.parse(this.getTodayDate() + ' ' + this.state.starttime) > Date.parse(this.getTodayDate() + ' ' + this.state.endtime))
        if (this.state.selectedIndex) {
            this.alertBox();
        }
        else {
            Swal.fire('Please select one of the meeting room');

        }

    }

    selectCard = (index) => {
        this.setState({ selectedIndex: index })
    }

    render() {
        return (
            <div>
                {this.state.redirects ? <Redirect to="/" /> : null}
                <Card className="p-3 shadow p-3 mb-5 bg-white rounded">
                    <h4 style={{ textAlign: "center", marginTop: "15px", color: "grey" }}>Please select one of the Free Rooms</h4>
                    <Form style={{ margin: "30px" }} onSubmit={this.onSubmitForm}>

                        {this.props.rooms !== undefined ? this.props.rooms.map((data, index) => (
                            <Card style={{ marginBottom: "10px", cursor: "pointer", border: index == this.state.selectedIndex ? "2px blue solid" : null }} onClick={() => this.selectCard(index)} key={index}>
                                <Card.Body>
                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                        <p><span style={{ fontWeight: "700" }}>Name : </span><span style={{ color: "crimson" }}>{data.name}</span></p>
                                        <p><span style={{ fontWeight: "700" }}>Floor : </span> <span style={{ color: "crimson", fontWeight: "700" }}>{data.floor}</span></p>
                                    </div>
                                    <div>
                                        <p>{this.props.dropdown}</p>

                                    </div>
                                </Card.Body>
                            </Card>
                        )) : null}

                        <Button variant="success" type="submit">
                            Save
        </Button>
                    </Form>
                </Card>
            </div>
        )
    }
};


const mapStateToProps = (store) => {
    return {
        rooms: store.meeting.meetingRooms
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getRoomsData: (val) => dispatch(getRoomsData(val))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Rooms);