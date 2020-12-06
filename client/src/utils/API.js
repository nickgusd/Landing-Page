import axios from "axios";

const ax = axios.create({baseURL: 'http://localhost:3001'})

export default {
    
    // Gets all musicman artists
    getArtists: function() {
      return ax.get("/api/artist");
    },

    addArtists: function(artistData) {
        return ax.post("/api/artist", artistData);
    },

    getGuitars: function() {
        return ax.get("/api/guitar");
    },

    addGuitars: function() {
        return ax.post("/api/guitar");
    }
    
  };