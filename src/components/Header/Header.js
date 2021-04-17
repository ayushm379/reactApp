import { Navbar, Nav, Dropdown } from 'react-bootstrap';
import logo from '../../logo.svg';
import './Header.css';
import { NotificationsOutlined, ShoppingCartOutlined } from '@material-ui/icons';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <Navbar bg="white" expand="lg" variant="light">
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src={logo}
                        width="60"
                        height="60"
                        className="d-inline-block align-self-center"
                    />{' '}
                </Navbar.Brand>
                <Nav className="header mx-auto align-items-center justify-content-end">
                    <Link className="mr-4 ml-4 navText" to="/">HOME</Link>
                    <Link className="mr-4 ml-4 navText" to="/portfolio"> PORTFOL </Link>
                    <Link className="mr-4 ml-4 navText" to="/aboutus">ABOUT US</Link>
                    <Link className="mr-4 ml-4 navText" to="/contactus">CONTACT US</Link>
                    <Link className="mr-4 ml-4 navText" to="/pricing">PRICING</Link>
                    <Dropdown>
                        <Dropdown.Toggle variant="white" id="dropdown">
                            <NotificationsOutlined style={{color:'gold'}} />
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item href="#/action-1">Notification 1</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Notification 2</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Notification 3</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>

                    {/* <Link className="mr-4 ml-4 navText" href="#features"></Link> */}
                    <Link className="mr-4 ml-4 navText" to="/cart"><ShoppingCartOutlined /></Link>
                    <button
                        type="button"
                        className="ml-4 btn btn-outline-primary login button"
                    >Login</button>
                </Nav>
            </Navbar>

        </div>
    )
}

export default Header;