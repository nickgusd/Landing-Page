import React, { useState } from "react";
import Home from "../pages/Home";
import Guitars from "../pages/Guitars"
import { Navbar } from "react-bootstrap";


function PageChange() {

    const [page, setPage] = useState({ currentPage: "Home" })

    handlePageChange = page => {
        setPage({ currentPage: "Guitar" })
        console.log(page)
    }

    renderPage = () => {
        if (page.currentPage === "Home") {
            return <Home />;
        } else if (page.currentPage === "Guitar") {
            return <Guitars />
        } else {
            return <Home />
        }

    }

    return (
        <div>
            <Navbar 
             currentPage={page.currentPage}
             handlePageChange={handlePageChange()}
             renderPage={renderPage()}
            
            />
        </div>
    )
}

export default PageChange;