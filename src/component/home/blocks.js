import React from "react";
import { CardColumns, Card, CardDeck } from "react-bootstrap";

const style = {
    pSize: {
        fontSize: "14px"
    }
}

const Blocks = (props) => {

    return (
        <CardDeck>
            <Card className="text-center p-3 shadow p-3 mb-5 bg-white rounded">
                <Card.Img variant="top" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
                <Card.Body>
                    <blockquote className="blockquote mb-0 card-body">
                        <h4>
                            BUILDING
</h4>
                        <p style={style.pSize}>
                            Name : {"Building 1"}
                        </p>
                        <p style={style.pSize}>
                            {/* Free Now : 10 */}
                    </p>
                    </blockquote>
                </Card.Body>
            </Card>


            <Card className="text-center p-3 shadow p-3 mb-5 bg-white rounded">
                <Card.Img variant="top" src="https://www.straitstimes.com/sites/default/files/styles/article_pictrure_780x520_/public/articles/2018/12/08/ST_20181208_DWROOM08_4469275.jpg?itok=04Nq6yfe&timestamp=1544203211" />
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
                <Card.Img variant="top" src="https://www.spacesworks.com/wp-content/uploads/2019/10/Meeting-room-spaces_SpacesGrosspeterTower_Basel_Switzerland_LargeMeetingRoom_WithoutPeople2.jpg" />
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