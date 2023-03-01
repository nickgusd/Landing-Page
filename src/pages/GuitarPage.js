/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import GuitarPageGrid from "../components/GuitarPageGrid/index";

function GuitarPage(props) {
  const location = useLocation();
  const [guitars, setGuitars] = useState([]);

  useEffect(() => {
    const page = props.match.params.guitar;
    setGuitars(page);
  }, [location.pathname]);

  return (
    <div>
      <GuitarPageGrid guitars={guitars} />
    </div>
  );
}

export default GuitarPage;
