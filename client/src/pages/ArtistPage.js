import React, {useState, useEffect} from "react";
import ArtistPageGrid from "../components/ArtistPageGrid";


export default function ArtistPage(props) {

    const [artists, setArtists] = useState([]);
    
    const artistInfo = [
        {
            artist: "Jason Richardson",
            image: "https://cdn.hipwallpaper.com/i/27/98/uDUnr3.jpg",
            bio: "The Ernie Ball Music Man Jason Richardson Artist Series Cutlass guitar is the latest collaboration between the award-winning Ernie Ball Music Man design team and the multitalented virtuoso guitarist and composer Jason Richardson. Featuring innovative design characteristics engineered specifically for Jason's exacting technique, the Richardson Artist Series Cutlass offers unique features and aesthetics that will give players a fresh look at one of our most popular models.",
            guitar: "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-81.png?1603988200",
            band: "Solo Artist",
            id: "jason-richardson"
        },
        {
            artist: "John Petrucci",
            image: "https://wallpapercave.com/wp/wp2834320.jpg",
            guitar: "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-30.png?1588635505",
            bio: "The JP15 features a lightweight Okoume body with a figured roasted maple top. Available in Sahara Burst, Trans Black Burst, and new Cerulean Paradise, each beautiful finish compliments the flame or quilt figuring with stunning effect. Roasted maple neck and fingerboard adds just the right amount of snap and brightness while providing more stability in ever-changing climates. The JP 15 is powered by twin custom DiMarzio Illuminator pickups, piezo bridge system and onboard 20db gain boost. Available in 6 or 7 string with Music Man JP tremolo, 3-way Toggle pickup selector and Music Man hardshell case.",
            band: "Dream Theatre",
            id: "john-petrucci"
        }
    ]

    
    useEffect(() => {
        const guitarist = props.match.params.artist;
        console.log(guitarist)
        setArtists(guitarist)
        
       

    }, [])




    return <div>
        <ArtistPageGrid artist={artists} data={artistInfo}/>
    </div>
}

