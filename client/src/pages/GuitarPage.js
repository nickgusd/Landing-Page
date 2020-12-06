import React, {useState, useEffect} from "react";
import API from "../utils/API";
import GuitarPageGrid from "../components/GuitarPageGrid/index"


function GuitarPage() {

    const [guitars, setGuitars] = useState();
    
    
    useEffect( () => {
        getGuitars();

    }, [])


const getGuitars = () => {
    API.getGuitars()
    .then(res => {
        setGuitars(res.data);
    })

    console.log(guitars)
}

    return (
        <div>
            <GuitarPageGrid  guitars={guitars}/>
        </div>
    )
}

export default GuitarPage;

