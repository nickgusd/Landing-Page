import React from "react";
import Grid from "../components/Gridlist/index"
import SimpleContainer from "../components/Container";
import FullWidthGrid from "../components/GuitarGrid/index";
import Image1 from "../assets/download.jpg";
import Image2 from "../assets/download-1.jpg";
import image3 from "../assets/download-2.jpg";
import Image4 from "../assets/instrument-18.png";


const photos = [
    {
        img: Image1,
        title: "Music Man Majesty",
        
    },
    {
        img: Image2,
        title: "Artic Dream",
    },
    {
        img: image3,
        title: "Pettruci",
    },
    {
        img: Image4,
        title: "JP Guitar",
    },

]


function Guitars() {
    return(
        <div>

        <FullWidthGrid guitarCards={photos}/>


        </div>
    )
}
export default Guitars;