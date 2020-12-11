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
            id: "jason-richardson",
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/8PVBVGJ1CXw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            guitarInfo: [
                {
                    model: "Jason Richardson 6-string Cutlass",
                    color: "Rorschach Red",
                    neck: "Select figured roasted maple neck, ebony fretboard",
                    pickguard: "None",
                    hardware: "Gold",
                    price: "$3,299.00"
                }
            ]
        },
        {
            artist: "John Petrucci",
            image: "https://wallpapercave.com/wp/wp2834320.jpg",
            guitar: "https://s3-us-west-2.amazonaws.com/static.music-man.com/website/images/instruments/instrument-30.png?1588635505",
            bio: "The JP15 features a lightweight Okoume body with a figured roasted maple top. Available in Sahara Burst, Trans Black Burst, and new Cerulean Paradise, each beautiful finish compliments the flame or quilt figuring with stunning effect. Roasted maple neck and fingerboard adds just the right amount of snap and brightness while providing more stability in ever-changing climates. The JP 15 is powered by twin custom DiMarzio Illuminator pickups, piezo bridge system and onboard 20db gain boost. Available in 6 or 7 string with Music Man JP tremolo, 3-way Toggle pickup selector and Music Man hardshell case.",
            band: "Dream Theatre",
            id: "john-petrucci",
            video: <iframe width="560" height="315" src="https://www.youtube.com/embed/kDyZY-6T43s" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>,
            guitarInfo: [
                {
                    model: "JP15 6-String",
                    color: "Cerulean Paradise Quilt",
                    neck: "Roasted Figured Maple",
                    pickguard: "None",
                    hardware: "Chrome",
                    price: "$3,499.00"
                    
                }
            ]

                
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

