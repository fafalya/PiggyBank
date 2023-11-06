import React, {Component} from "react";
import { Container, Navbar } from "react-bootstrap";

export default class Header extends Component {
    render () {
        return (
            <Navbar>
                <Container>
                    <Navbar.Brand href="/">
                    <a href="index.html" class="logo">ArtXibition</a>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        )
    }
}