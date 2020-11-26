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
import Component1 from "../assets/components/headstock.jpg.pagespeed.ce.bioY9CqOJk.jpg"
import Component2 from "../assets/components/schaller-tuners.jpg.pagespeed.ce.VWBMaFeWHy.jpg"
import Component3 from "../assets/components/sculpted-neck-joint.jpg.pagespeed.ce.SGV0sy4a7r.jpg"
import Component4 from "../assets/components/truss-rod-wheel.jpg.pagespeed.ce.KfJ9V9yTSM.jpg"
import NewGuitar1 from "../assets/newguitar1.jpg"
import NewGuitar2 from "../assets/newguitar2.jpg"
import NewGuitar3 from "../assets/newguitar3.jpg"
import NewGuitar4 from "../assets/newguitar4.jpg"
import Newguitar5 from "../assets/newguitar5.jpg"

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
        img: Newguitar5,
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

const guitarComponents = [
    {
        img: Component1,
        title: "Image9",
    },
    {
        img: Component2,
        title: "Image10",
    },
    {
        img: Component3,
        title: "Image11",
    },
    {
        img: Component4,
        title: "Image12",
    }
]

const newGuitars = [
    {
        img: Image4,
        title: "Image13",
    },
    {
        img: NewGuitar2,
        title: "Image14",
    },
    {
        img: NewGuitar3,
        title: "Image15",
    },
    {
        img: NewGuitar4,
        title: "Image16",
    }
]

const artistVids = [

    {
        img: <iframe width="560" height="315" src="https://www.youtube.com/embed/kDyZY-6T43s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen id="jpvid"></iframe>,
        title: "Image13",
        type: "iframe"
    },
    {
        img: NewGuitar2,
        title: "Image14",
        type: "photo"
    },
    {
        img: NewGuitar3,
        title: "Image15",
        type: "photo"
    },
    {
        img: NewGuitar4,
        title: "Image16",
        type: "photo"
    }



]


function Home() {
    return (
        <div >
            <Carousel carouselpics={carouselpics} />
            <SimpleContainer pics={photos} style={{ width: "100% !important" }} />
            <SimpleContainer pics={newGuitars} style={{ width: "100% !important" }} />
            <SimpleContainer pics={photos2} style={{ width: "100% !important" }} className="artist-container" />
            <SimpleContainer pics={guitarComponents} style={{ height: "110% !important", marginTop: "200px" }} />


        </div>
    )
}

export default Home;