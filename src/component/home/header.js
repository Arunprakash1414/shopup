import React from "react";
import { Navbar, Image, Dropdown, DropdownButton, Nav } from "react-bootstrap";

const Header = (props) => {
    var rowLen = props.buildings.length;
    return (
        <Navbar bg="light" expand="lg" style={{ justifyContent: "space-around" }} >
            <Navbar.Brand href="/">
                <Image src={require("../../assets/logo.png")} width={80} />
            </Navbar.Brand>
            <Navbar >
                <DropdownButton id="dropdown-item-button" title={props.dropdown} variant="info" disabled={props.disabled}>
                    {props.buildings.map((data, index) => {
                        return (<>
                            <Dropdown.Item key={index} onClick={() => props.selectDropdown(data.name)}>{data.name}</Dropdown.Item>
                            {rowLen == index + 1 ? null : <Dropdown.Divider />}
                        </>

                        )
                    })
                    }
                </DropdownButton>
            </Navbar>

        </Navbar>
    )
};

export default Header;