import React, { useState, useRef } from "react";
import { NavDropdown, Form, FormControl, Button, Nav, Navbar } from "react-bootstrap";
import Logo from "../../assets/download-3.jpg";
import "./style.css"
import { useEffect } from "react";
import {useHistory} from "react-router-dom";
import API from "../../utils/API"

const guitarDataMongo = [
    {
        "_id": "5fcc4b68db8680eb3cde10ee",
        "guitar": "Majesty Purple Nebula",
        "quantity": 10,
        "price": 5299,
        "__v": 0,
        "image": "https://i.pinimg.com/originals/94/77/85/94778524711b3553d63b54d7b2c4da75.jpg",
        "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-77.png?1588624445",
        "componentImage": "https://www.music-man.com/assets/images/instruments/expanded/john-petrucci/majesty-headstock.jpg.pagespeed.ce.mTA3RlaTaX.jpg",
        "color": "Purple Nebula",
        "hardware": "Chrome",
        "neck": "Flame Maple and Mahogany with Ebony Fretboard",
        "pickguard": "None"
    },
    {
        "_id": "5fcc4b99db8680eb3cde10ef",
        "guitar": "Arctic Dream",
        "quantity": 10,
        "price": 3000,
        "__v": 0,
        "image": "https://www.alaska-wildlife-guide.com/wp-content/uploads/2019/10/northernlights-4.jpg",
        "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-32.png?1588615228",
        "componentImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/slides-6/slide-32.jpg?1484679195",
        "color": "Arctic Dream",
        "hardware": "Chrome",
        "neck": "Flame Maple and Mahogany with Ebony Fretboard",
        "pickguard": "None"
    },
    {
        "_id": "5fcc4bb6db8680eb3cde10f0",
        "guitar": "Nomac Majesty",
        "quantity": 10,
        "price": 10000,
        "__v": 0,
        "image": "https://distinctiveguitar.com/product_images/uploaded_images/17nov1600x900.jpg",
        "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/bfr_instruments/seamless_image/full/9.jpg?1509552965",
        "componentImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/bfr_slides/slide_desktop/full/77.jpg?1509477203",
        "color": "Timeworn Matte Silver",
        "hardware": "Chrome",
        "neck": "Abalone Inlay",
        "pickguard": "None"
    },
    {
        "_id": "5fcc4bc9db8680eb3cde10f1",
        "guitar": "Steve Morse",
        "quantity": 10,
        "price": 2499,
        "__v": 0,
        "color": "Morse Blue Burst",
        "componentImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/slides-3/slide-18.jpg?1446826837",
        "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-18.png?1519673871",
        "hardware": "Chrome",
        "image": "https://images.hdqwalls.com/download/blue-cool-sunset-w4-2560x1700.jpg",
        "neck": "Maple w/Rosewood Fretboard",
        "pickguard": "None"
    },
    {
        "_id": "5fcc4bebdb8680eb3cde10f2",
        "guitar": "St. Vincent HH",
        "quantity": 10,
        "price": 2599,
        "__v": 0,
        "color": "Charcoal Sparkle",
        "componentImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/slides-3/slide-73.jpg?1526934873",
        "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-73.png?1565732323",
        "hardware": "Matte Black",
        "image": "https://wallpaperaccess.com/full/3087826.jpg",
        "neck": "Figured Roasted",
        "pickguard": "Matte Black"
    },
    {
        "_id": "5fcc4c98db8680eb3cde10f3",
        "guitar": "Majesty Goldmine",
        "quantity": 10,
        "price": 3000,
        "__v": 0,
        "image": "https://wallpaperaccess.com/full/21535.jpg",
        "guitarImage": "https://www.guitar-planet.co.uk/wp-content/uploads/2016/01/Ernie-Ball-Music-Man-Majesty-Goldmine.png",
        "componentImage": "https://wallpaperaccess.com/full/21535.jpg",
        "color": "Gold Mine",
        "hardware": "Chrome",
        "neck": "Flame Maple and Mahogany with Ebony Fretboard",
        "pickguard": "None"
    },
    {
        "_id": "5fd15735a9e83017f6037c27",
        "guitar": "Stingray",
        "quantity": 10,
        "price": 2149,
        "image": "https://i.pinimg.com/originals/ac/cd/a5/accda556b9106fc2880965f0cae9d413.jpg",
        "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-71.png?1602686452",
        "componentImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/slides-11/slide-71.jpg?1522705218",
        "neck": "Figured Roasted",
        "color": "Charging Green",
        "pickguard": "Parchment",
        "hardware": "Chrome",
        "__v": 0
    },
    {
        "_id": "5fd15c6c46a78618ca8c6795",
        "guitar": "Axis",
        "quantity": 10,
        "price": 2699,
        "image": "https://wallpaperaccess.com/full/1413893.jpg",
        "guitarImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-3.png?1519673473",
        "componentImage": "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/slides-3/slide-3.jpg?1446826832",
        "neck": "Maple w/Maple Fretboard",
        "color": "Trans Gold Flame",
        "pickguard": "None",
        "hardware": "Chrome",
        "__v": 0
    },
    {
        "guitar": "John Petrucci"
    },
    {
        "guitar": "Jason Richardson"
    }
  ]

function MyNavbar() {

    const [search, setSearch] = useState();
    const [result, setResult] = useState([]);
    const [isCollapsed, setCollapsed] = useState(true)
    const inputRef = useRef();
    let history = useHistory();
    let centerNav1 = document.querySelector(".Link1");
    let centerNav2 = document.querySelector(".Link2");
    let centerNav3 = document.querySelector(".Link3");
    let searchInput = document.querySelector(".mr-sm-2");
    let searchButton = document.querySelector("#search-button");
    let firstCard = document.querySelector("#guitar1");


    useEffect( () => {
        // runSearch()
        setResult(guitarDataMongo)

    }, [])


    // const runSearch = async () => {

    //     try {
    //         await API.getGuitars()
    //         .then(res => {
    //             setResult(res.data);
    //             }) 

    //     } catch(err) {
    //         console.log(err);
    //     }
       
    // }

    console.log(result)

    const handleInputChange = (event) => {

        const { value } = event.target;
        console.log(value)
        setSearch(value)

    }

    const handleCollapse = () => {
        
        if (isCollapsed) {
            setCollapsed(false)
            centerNav1.setAttribute("style", "display: block; margin: 0 auto !important;")
            centerNav2.setAttribute("style", "display: block; margin: 0 auto !important;")
            centerNav3.setAttribute("style", "display: block; margin: 0 auto !important;")
            searchInput.setAttribute("style", "display: block; margin: 0 auto !important;")
            searchButton.setAttribute("style", "position: relative; right: 50px")
            firstCard.setAttribute("style", "margin-top: 260px")

        } else {
            setCollapsed(true)
            firstCard.setAttribute("style", "margin-top: 0px")
        }

    }

    

    const handleFormSubmit = (event) => {
        event.preventDefault();
       
        const filterSearch = result.filter(item => item.guitar === search);
        console.log(filterSearch[0].guitar)
        

        if (filterSearch.length === 0) {
            console.log("no entries found")
        } else if (filterSearch[0].guitar === "Jason Richardson" || filterSearch[0].guitar === "John Petrucci") {
            history.push(`/artistpage/` + filterSearch[0].guitar)
            inputRef.current.value = "";
            window.location.reload()
        } else {
            //Use History
            history.push(`/guitarpage/` + filterSearch[0].guitar )
            inputRef.current.value = "";
            window.location.reload()
        }

    }

    return (
        <div>
            <Navbar bg="light" expand="lg" id="myNav" className="navbar-fixed-top" className={!isCollapsed ? "thick-nav" : ""}>
                <Navbar.Brand href="#home"><img src={Logo} alt="logo" style={{ transform: "scale(.8)" }} className="music-man-logo"></img></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={handleCollapse} />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/" className="Link1">Home</Nav.Link>
                        <Nav.Link href="/guitars" className="Link2" >Guitars</Nav.Link>
                        <Nav.Link href="/artists" className="Link3" >Artists</Nav.Link>
                    </Nav>
                    <Form inline>
                        <input type="text" placeholder="Search" className="mr-sm-2" list="data" onChange={handleInputChange} ref={inputRef} style={{ borderRadius: "3%" }} />

                        <datalist id="data">
                            {result.map(item =>
                                <option key={item._id} value={item.guitar} />
                            )}
                        </datalist>
                        {/* <FormControl type="text" placeholder="Search" className="mr-sm-2" /> */}
                        <Button variant="outline-success" onClick={handleFormSubmit} id="search-button">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    )
}

export default MyNavbar;

 