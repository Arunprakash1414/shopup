

import React, { Component } from "react";
import { Form, Button, Col, Card, FormCheck } from "react-bootstrap";
import DatePicker from "react-datepicker";
import TimePicker from 'react-time-picker';

import "react-datepicker/dist/react-datepicker.css";



class AddMeeting extends Component {
    state = {
        startDate: new Date(),
        starttime: '00:00',
        endtime: '00:00'
    };
    componentDidMount() {

        document.getElementsByClassName("react-time-picker__wrapper")[0].style.border = "0";
        document.getElementsByClassName("react-time-picker__wrapper")[1].style.border = "0";
    }

    handleChange = date => {
        this.setState({
            startDate: date
        });
    };

    onChangeStartTime = starttime => this.setState({ starttime });

    onChangeEndTime = endtime => this.setState({ endtime });

    getTodayDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        var yyyy = today.getFullYear();

        today = mm + '/' + dd + '/' + yyyy;
        return today;
    }
    onSubmitForm = (e) => {
        e.preventDefault();
        //  console.log(Date.parse(this.getTodayDate() + ' ' + this.state.starttime) > Date.parse(this.getTodayDate() + ' ' + this.state.endtime))
        this.props.listMeeting();
    }

    render() {
        return (
            <Card className="p-3 shadow p-3 mb-5 bg-white rounded">
                <Form style={{ margin: "30px" }} onSubmit={this.onSubmitForm}>
                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" placeholder="Enter name" required />
                        </Form.Group>

                        <Form.Group as={Col}>

                            <p style={{ marginBottom: "8px" }}>Date&nbsp;</p>
                            <DatePicker className="form-control"
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                                required
                            />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group  >


                        <Form.Label>Building</Form.Label>
                        <Form.Control type="text" placeholder="Building Name" disabled
                            value={this.props.dropdown}
                            required
                        />

                    </Form.Group>



                    <Form.Row>
                        <Form.Group as={Col} >
                            <Form.Label>Start time&nbsp;</Form.Label>
                            <TimePicker
                                onChange={this.onChangeStartTime}
                                value={this.state.starttime}
                                className="form-control"

                            />
                        </Form.Group>

                        <Form.Group as={Col} >
                            <Form.Label>End time&nbsp;</Form.Label>
                            <TimePicker
                                onChange={this.onChangeEndTime}
                                value={this.state.endtime}
                                className="form-control"
                            />
                        </Form.Group>


                    </Form.Row>


                    <Button variant="success" type="submit">
                        Submit
        </Button>
                </Form>
            </Card>
        )
    }
};

export default AddMeeting;