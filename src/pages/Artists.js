import React from "react";
// import Image5 from "../assets/artists/signature-artist-7.png";
// import Image6 from "../assets/artists/standard-artist-104.jpg";
import image7 from "../assets/artists/standard-artist-283.jpg";
import Image8 from "../assets/artists/standard-artist-310.jpg";
import image9 from "../assets/artists/standard-artist-186.jpg";
import Image10 from "../assets/artists/standard-artist-214.jpg";
import image11 from "../assets/artists/standard-artist-229.jpg";
import Image12 from "../assets/artists/standard-artist-255.jpg";
// import Image13 from "../assets/artists/standard-artist-275.jpg";

import AdvancedGridList from "../components/AdvancedGridList/index";

const photos2 = [
  {
    img: "https://upload.wikimedia.org/wikipedia/commons/1/12/Dreamtheater_-_Wacken_Open_Air_2015-1619.jpg",
    title: "John Petrucci",
    featured: true,
    id: "artist1",
  },
  {
    img: "https://pbs.twimg.com/media/DwAYp4rV4AAEK8o.jpg",
    title: "Jason Richardson",
    featured: true,
    id: "artist2",
  },
  {
    img: image7,
    title: "Adam Levine",
    featured: false,
    id: "artist3",
  },
  {
    img: Image8,
    title: "Bruno Mars",
    featured: false,
    id: "artist4",
  },
  {
    img: image9,
    title: "Josh Woodard",
    featured: false,
    id: "artist5",
  },
  {
    img: Image10,
    title: "Hunter Hayes",
    featured: false,
    id: "artist6",
  },
  {
    img: image11,
    title: "Charlie Robbins",
    featured: false,
    id: "artist7",
  },
  {
    img: Image12,
    title: "Jerry Montano",
    featured: false,
    id: "artist8",
  },
];

function ArtistPage() {
  return (
    <div>
      <AdvancedGridList artists={photos2} />
    </div>
  );
}

export default ArtistPage;
