import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const isServer = typeof window === "undefined";

const About = () => {
  if (isServer) {
    return <>privacy server Loading...</>;
  } else {
    return <Layout>Privacy policy Page</Layout>;
  }
};

export default About;
