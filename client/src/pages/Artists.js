import React, {useState} from "react";
import TitlebarGridList from "../components/TileBar/index"
import Image5 from "../assets/artists/standard-artist-16.jpg";
import Image6 from "../assets/artists/standard-artist-104.jpg";
import image7 from "../assets/artists/standard-artist-283.jpg";
import Image8 from "../assets/artists/standard-artist-310.jpg";
import AdvancedGridList from "../components/AdvancedGridList/index";
import API from "../utils/API";


const photos2 = [
    {
        img: Image5,
        title: "Phoenix",
        featured: true
    },
    {
        img: Image6,
        title: "Jason Richardson",
        featured: true,
    },
    {
        img: image7,
        title: "Adam Levine",
        featured: false
    },
    {
        img: Image8,
        title: "Bruno Mars",
        featured: false
    },

]



function ArtistPage() {
const [artist, setArtist] = useState()


    return (
        <div>
          
            <AdvancedGridList  artists={photos2} />

        </div>
    )
}

export default ArtistPage;