import React, { useState, useRef } from "react";
import { NavDropdown, Form, FormControl, Button, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/download-3.jpg";
import "./index.css"
import { useEffect } from "react";
import API from "../../utils/API"



function MyNavbar() {

    const [search, setSearch] = useState();
    const [result, setResult] = useState([]);
    const inputRef = useRef();

    useEffect( () => {
        runSearch()
    }, [])


    const runSearch = async () => {

        try {
            await API.getGuitars()
            .then(res => {
                setResult(res.data);
                }) 

        } catch(err) {
            console.log(err);
        }
       
    }

    console.log(result)

    const handleInputChange = (event) => {

        const { value } = event.target;
        console.log(value)
        setSearch(value)

    }


    const handleFormSubmit = (event) => {
        event.preventDefault();

        const filterSearch = result.filter(item => item.guitar === search);
        console.log(filterSearch)

        if (filterSearch.length === 0) {
            console.log("no entries found")
        } else {
            console.log("i need to build this part still")
        }



    }



    return (
        <div>
            <Navbar bg="light" expand="lg" id="myNav" className="navbar-fixed-top">
                <Navbar.Brand href="#home"><img src={Logo} alt="logo" style={{ transform: "scale(.8)" }}></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/guitars">Guitars</Nav.Link>
                        <Nav.Link href="/artists">Artists</Nav.Link>
                        <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <input type="text" placeholder="Search" className="mr-sm-2" list="data" onChange={handleInputChange} ref={inputRef} style={{ borderRadius: "3%" }} />

                        <datalist id="data">
                            {result.map(item =>
                                <option key={item._id} value={item.guitar} />
                            )}
                        </datalist>
                        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                        <Button variant="outline-success" onClick={handleFormSubmit}>Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavbar;