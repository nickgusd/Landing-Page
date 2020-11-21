import React from "react";
import SingleLineGridList from "../components/Gridlist";
import SimpleContainer from "../components/Container";
import Image1 from "../assets/download.jpg";
import Image2 from "../assets/download-1.jpg";
import image3 from "../assets/download-2.jpg";
import Image4 from "../assets/instrument-18.png";
import Image5 from "../assets/artists/standard-artist-16.jpg";
import Image6 from "../assets/artists/standard-artist-104.jpg";
import image7 from "../assets/artists/standard-artist-283.jpg";
import Image8 from "../assets/artists/standard-artist-310.jpg";


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




function Home() {
    return(
        <div>
            <SimpleContainer pics={photos}/>
            <SimpleContainer pics={photos2}/>
            
            
        </div>
    )
}

export default Home;