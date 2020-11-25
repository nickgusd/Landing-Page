import React from "react";

import SimpleContainer from "../components/Container";
import Carousel from "../components/Carousel/index";
import Image1 from "../assets/download.jpg";
import Image2 from "../assets/download-1.jpg";
import image3 from "../assets/download-2.jpg";
import Image4 from "../assets/instrument-18.png";
import Image5 from "../assets/artists/standard-artist-16.jpg";
import Image6 from "../assets/artists/standard-artist-104.jpg";
import image7 from "../assets/artists/standard-artist-283.jpg";
import Image8 from "../assets/artists/standard-artist-310.jpg";
import Image9 from "../assets/carousel/Eb.jpg"
import Image10 from "../assets/carousel/ebmm-smoked-pearl-majesty-zoom-background.jpg"
import Image11 from "../assets/carousel/musicman.jpg"
import Image12 from "../assets/carousel/Majesty.jpg"
import Image13 from "../assets/carousel/musicman.jpg"

const photos = [
    {
        img: Image1,
        title: "Image1",
    },
    {
        img: Image2,
        title: "Image2",
    },
    {
        img: image3,
        title: "Image3",
    },
    {
        img: Image4,
        title: "Image4",
    },

]

const photos2 = [
    {
        img: Image5,
        title: "Image5",
    },
    {
        img: Image6,
        title: "Image6",
    },
    {
        img: image7,
        title: "Image7",
    },
    {
        img: Image8,
        title: "Image8",
    },

]

const carouselpics = [
    {
    img: Image9,
    title: "Image5",
},
{
    img: Image10,
    title: "Image6",
},
{
    img: Image11,
    title: "Image7",
},
{
    img: Image12,
    title: "Image8",
},
{
    img: Image13,
    title: "Image8",
},
]



function Home() {
    return(
        <div >
            <Carousel carouselpics={carouselpics}/>
            <SimpleContainer pics={photos} style={{width: "100% !important"}}/>
            <SimpleContainer pics={photos2} style={{width: "100% !important"}} className="artist-container"/>
            <SimpleContainer pics={photos2} style={{height: "110% !important", marginTop: "200px"}}/>
            
            
        </div>
    )
}

export default Home;