import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const isServer = typeof window === "undefined";

const Event = () => {
  if (isServer) {
    return <>event from server Loading...</>;
  } else {
    return <Layout>Event server from server</Layout>;
  }
};

export default Event;
