import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import mapSetup from "../settings/map";

import DomRouter from "../components/dom-router";
import { NavLink, withRouter } from "react-router-dom";
var map;

const Map = () => {
  useEffect(() => {
    // Update the document title using the browser API
    console.log("UseEfect launching!!");
    map = new window.google.maps.Map(document.getElementById("map"), {
      //center: { lat: LandL[0], lng: LandL[1] },
      center: { lat: -33.865, lng: 151 },
      zoom: 5, //Zoom,
      disableDefaultUI: true,
      zoomControl: true,
      mapTypeId: window.google.maps.MapTypeId.ROADMAP,
      clickableIcons: false,
      gestureHandling: "greedy",
      styles: mapSetup //exported from outside this js
    });
  }, []);

  return (
    <DomRouter>
      <div id="map" style={{ height: "300px", width: "300px" }}></div>
      Here will be map, click on event:
      <Link href="/event">
        <p>Event</p>
      </Link>
      <NavLink to="/event">Event Dom Router</NavLink>
    </DomRouter>
  );
};

export default Map;
