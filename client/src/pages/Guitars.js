import React from "react";
import Grid from "../components/Gridlist/index"
import SimpleContainer from "../components/Container";
import FullWidthGrid from "../components/GuitarGrid/index";
import Image1 from "../assets/hd photos/purplenebula.png";
import Image2 from "../assets/hd photos/arcticdream.png";
import image3 from "../assets/hd photos/nomacmajesty.jpg";
import Image4 from "../assets/instrument-18.png";
import NewGuitar1 from "../assets/hd photos/axis.png";
import NewGuitar2 from "../assets/hd photos/stingray.png";
import NewGuitar3 from "../assets/newguitar3.jpg"
import NewGuitar4 from "../assets/hd photos/Stvincent.png";
import Newguitar5 from "../assets/hd photos/goldmine.jpg";


const photos = [
    {
        img: Image1,
        title: "Majesty Purple Nebula",
        Model: "Majesty Purple Nebula",
        Color: "Purple Nebula",
        Neck: "Flame Maple and Mahogany with Ebony Fretboard",
        Pickguard: "None",
        Hardware: "Chrome",
        Price: "$5,299.00",
        Qty: "10",
        id: "guitar1"
    },
    {
        img: Image2,
        title: "Arctic Dream",
        Model: "Majesty",
        Color: "Arctic Dream",
        Neck: "Flame Maple and Mahogany with Ebony Fretboard",
        Pickguard: "None",
        Hardware: "Chrome",
        Price: "$3,000.00",
        Qty: "10",
        id: "guitar2"

    },
    {
        img: image3,
        title: "Nomac Majesty",
        Model: "Majesty",
        Color: "Timeworn Matte Silver",
        Neck: "Abalone Inlay",
        Pickguard: "None",
        Hardware: "Chrome",
        Price: "$10,000",
        Qty: "10",
        id: "guitar3"
    },
    {
        img: "https://www.guitar-planet.co.uk/wp-content/uploads/2016/01/Ernie-Ball-Music-Man-Majesty-Goldmine.png",
        title: "Majesty Goldmine",
        Model: "Majesty Goldmine",
        Color: "Gold Mine",
        Neck: "Flame Maple and Mahogany with Ebony Fretboard",
        Pickguard: "None",
        Hardware: "Chrome",
        Price: "$3,000",
        Qty: "10",
        id: "guitar4"
    },
    {
        img: Image4,
        title: "Steve Morse",
        Model: "6 String - Standard Hardtail",
        Color: "Morse Blue Burst",
        Neck: "Maple w/Rosewood Fretboard",
        Pickguard: "Black",
        Hardware: "Chrome",
        Price: "$2,499",
        Qty: "10",
        id: "guitar5"
        
    },
    {
        img: NewGuitar1,
        title: "Axis",
        id: "guitar6"
    },
    {
        img: NewGuitar2,
        title: "Stingray",
        id: "guitar7"
    },
    {
        img: NewGuitar4,
        title: "St. Vincent HH",
        Model: "St. Vincent HH - 6 string",
        Color: "Charcoal Sparkle",
        Neck: "Figured Roasted Maple w/ Ebony Fretboard",
        Pickguard: "Matte Black",
        Hardware: "Chrome",
        Price: "$2,599",
        Qty: "10",
        id: "guitar8"
    },
]

function Guitars() {
    return (
        <div>
            <FullWidthGrid guitarCards={photos} />
        </div>
    )
}
export default Guitars;