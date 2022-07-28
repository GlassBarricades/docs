import React from "react";
import { Nav, Navbar, NavDropdown, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import LinkContainer from "react-router-bootstrap/LinkContainer";

import './App-header.css';

const AppHeader = () => {
    return (
        <Navbar bg="light" expand="lg" sticky="top">
            <Container>
                <Navbar.Brand s={Link} to="/">
                    207-DOCS
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav defaultActiveKey="/" className="mx-auto my-2 my-lg-0">
                        <LinkContainer to="/">
                            <Nav.Link>Главная</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to="/cashless">
                            <Nav.Link>Безнал</Nav.Link>
                        </LinkContainer>
                        <NavDropdown title="Статьи" id="navbarScrollingDropdown">
                            <LinkContainer to="/bonuses">
                                <NavDropdown.Item>
                                    Бонусы
                                </NavDropdown.Item>
                            </LinkContainer>
                            <LinkContainer to="/coloring">
                                <NavDropdown.Item>
                                    Наценки
                                </NavDropdown.Item>
                            </LinkContainer>
                        </NavDropdown>
                    </Nav>
                    <Nav as="ul">
                        <Nav.Item as="li">
                            <Nav.Link href="/vk">Вконтакте</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/inst">Инстаграмм</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
export default AppHeader;