import React, {useState, useEffect} from "react";
import ArtistPageGrid from "../components/ArtistPageGrid";

export default function ArtistPage(props) {

    const [artists, setArtists] = useState([]);
    
    
    
    useEffect(() => {
        const page = props.match.params.guitar;
        // console.log(page)
        setArtists(page)
        
       

    }, [])




    return <div>
        <ArtistPageGrid artist={artists}/>
    </div>
}

