import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const isServer = typeof window === "undefined";

const Create = () => {
  if (isServer) {
    return <>Create from server Loading...</>;
  } else {
    return <Layout>Create server from server</Layout>;
  }
};

export default Create;
