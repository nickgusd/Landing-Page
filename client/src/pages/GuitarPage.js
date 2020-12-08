import React, {useState, useEffect} from "react";
import API from "../utils/API";
import GuitarPageGrid from "../components/GuitarPageGrid/index"


function GuitarPage(props) {

    const [guitars, setGuitars] = useState([]);
    
    
    
    useEffect( (prevState) => {
        const page = props.match.params.guitar;
        // console.log(page)
        setGuitars(page)
        console.log(prevState)
       

    }, [])

    console.log(guitars)



    return (
        <div>
            <GuitarPageGrid  guitars={guitars} />
        </div>
    )
}

export default GuitarPage;

