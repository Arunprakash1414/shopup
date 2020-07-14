import React from "react";
import { Card, CardDeck } from "react-bootstrap";

const style = {
    pSize: {
        fontSize: "14px"
    }
}

const Blocks = (props) => {

    return (
        <CardDeck>
            <Card className="text-center p-3 shadow p-3 mb-5 bg-white rounded">
                <Card.Img variant="top" src={require("../../assets/build.jpeg")} />
                <Card.Body>
                    <blockquote className="blockquote mb-0 card-body">
                        <h4>
                            BUILDING
</h4>
                        <p style={style.pSize}>
                            Name : {props.dropdown}
                        </p>
                        <p style={style.pSize}>
                            {/* Free Now : 10 */}
                        </p>
                    </blockquote>
                </Card.Body>
            </Card>


            <Card className="text-center p-3 shadow p-3 mb-5 bg-white rounded">
                <Card.Img variant="top" src={require("../../assets/room.jpg")} />
                <Card.Body>

                    <blockquote className="blockquote mb-0 card-body">
                        <h4>
                            ROOMS
                    </h4>
                        <p style={style.pSize}>
                            Total : 30
                        </p>
                        <p style={style.pSize}>
                            Free Now : 10
                    </p>


                    </blockquote>
                </Card.Body>
            </Card>




            <Card className="text-center p-3 shadow p-3 mb-5 bg-white rounded">
                <Card.Img variant="top" src={require("../../assets/meeting.jpg")} />
                <Card.Body>
                    <blockquote className="blockquote mb-0 card-body">
                        <h4>
                            MEETING
                    </h4>
                        <p style={style.pSize}>
                            Total 100 Today
                        </p>
                        <p style={style.pSize}>
                            Total 10 Going on now
                    </p>
                    </blockquote>
                </Card.Body>
            </Card>


        </CardDeck>
    )
};

export default Blocks;