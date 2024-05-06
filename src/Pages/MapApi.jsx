import React, { useEffect } from "react";

const MapComponent = () => {
  useEffect(() => {
    let map;

    const initMap = async () => {
      
      const { Map } = await window.google.maps;

      map = new Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });
    };

    initMap();

    return () => {
      map = null;
    };
  }, []); 
  return <div id="map" style={{ width: "100%", height: "400px" }}></div>; 
};

export default MapComponent;






