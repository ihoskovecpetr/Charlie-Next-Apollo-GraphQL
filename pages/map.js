import React, { useEffect } from "react";
import Link from "next/link";
import Head from "next/head";
import mapSetup from "../settings/map";

import Layout from "../components/Layout";
import DomRouter from "../components/dom-router";
import { NavLink, withRouter } from "react-router-dom";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Event from "../components/event";
import MapComponent from "../components/map-component";

const isServer = typeof window === "undefined";
const Map = () => {
  if (isServer) {
    return (
      <>
        <Head>
          <title>Charlie Next Graph Hook Index</title>
          <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyADHzQ7cTn3uwDBUMoROC2JFdzZ_gEAzvI&libraries=geometry,places"></script>
        </Head>
        Mock data Mapa while on server
      </>
    );
  }
  return (
    <Layout>
      <MapComponent />
      <DomRouter>
        <div id="map" style={{ height: "300px", width: "300px" }}></div>
        Here will be map, click on event:
        <Link href="/event">
          <p>Event</p>
        </Link>
        <NavLink to="/event">Event Dom Router</NavLink>
      </DomRouter>
    </Layout>
  );
};

export default Map;
