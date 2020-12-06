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


    // const handleInputChange = (event) => {
    //     const {value} = event.target;
    //     console.log(value)
    //     setArtist(value)
    
    // }
    
    
    // const handleClick = () => {
    //     console.log(artist)
    
    //     API.addArtists({
    //         title: artist
    //     })
    //     .then(res => {
    //         console.log(res)
    //     })
       
    
    // }






    return (
        <div>
            {/* <input type="text" className = "artist" placeholder="artist" style={{marginTop: "400px", border: "1px solid black"}} onChange={handleInputChange}/>
            
            <button onClick={handleClick}>Click Me</button> */}

           
            {/* <TitlebarGridList artists={photos2}/> */}
            <AdvancedGridList  artists={photos2} />

        </div>
    )
}

export default ArtistPage;