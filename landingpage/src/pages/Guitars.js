import React from "react";
import Grid from "../components/Gridlist/index"
import SimpleContainer from "../components/Container";
import FullWidthGrid from "../components/GuitarGrid/index";
import Image1 from "../assets/download.jpg";
import Image2 from "../assets/download-1.jpg";
import image3 from "../assets/download-2.jpg";
import Image4 from "../assets/instrument-18.png";
import NewGuitar1 from "../assets/newguitar1.jpg"
import NewGuitar2 from "../assets/newguitar2.jpg"
import NewGuitar3 from "../assets/newguitar3.jpg"
import NewGuitar4 from "../assets/newguitar4.jpg"
import Newguitar5 from "../assets/newguitar5.jpg"


const photos = [
    {
        img: Image1,
        title: "Music Man Majesty",
        Model: "Majesty Purple Nebula",
        Color: "Purple Nebula",
        Neck: "Flame Maple and Mahogany with Ebony Fretboard",
        Pickguard: "None",
        Hardware: "Chrome"
        ,
    },
    {
        img: Image2,
        title: "Artic Dream",
        Model: "Majesty",
        Color: "Artic Dream",
        Neck: "Flame Maple and Mahogany with Ebony Fretboard",
        Pickguard: "None",
        Hardware: "Chrome"
    },
    {
        img: image3,
        title: "Nomac Majesty",
        Model: "Majesty",
        Color: "Timeworn Matte Silver",
        Neck: "Abalone Inlay",
        Pickguard: "None",
        Hardware: "Chrome"
    },
    {
        img: Image4,
        title: "Steve Morse",
        Model: "6 String - Standard Hardtail",
        Color: "Morse Blue Burst",
        Neck: "Maple w/Rosewood Fretboard",
        Pickguard: "Black",
        Hardware: "Chrome"
        
    },
    {
        img: NewGuitar1,
        title: "Music Man",
    },
    {
        img: NewGuitar2,
        title: "Music Man",
    },
    {
        img: NewGuitar4,
        title: "St. Vincent HH",
        Model: "St. Vincent HH - 6 string",
        Color: "Charcoal Sparkle",
        Neck: "Figured Roasted Maple w/ Ebony Fretboard",
        Pickguard: "Matte Black",
        Hardware: "Chrome"
    },
    {
        img: Newguitar5,
        title: "Music Man Majesty",
        Model: "Majesty Gold",
        Color: "Gold Mine",
        Neck: "Flame Maple and Mahogany with Ebony Fretboard",
        Pickguard: "None",
        Hardware: "Chrome"
    }



]







function Guitars() {
    return (
        <div>

            <FullWidthGrid guitarCards={photos} />


        </div>
    )
}
export default Guitars;