import React from "react";
import TitlebarGridList from "../components/TileBar/index"
import Image5 from "../assets/artists/standard-artist-16.jpg";
import Image6 from "../assets/artists/standard-artist-104.jpg";
import image7 from "../assets/artists/standard-artist-283.jpg";
import Image8 from "../assets/artists/standard-artist-310.jpg";


const photos2 = [
    {
        img: Image5,
        title: "Phoenix",
    },
    {
        img: Image6,
        title: "Jason Richardson",
    },
    {
        img: image7,
        title: "Adam Levine",
    },
    {
        img: Image8,
        title: "Bruno Mars",
    },

]



function ArtistPage() {

    return (
        <div>
            <TitlebarGridList artists={photos2}/>
        </div>
    )
}

export default ArtistPage; 