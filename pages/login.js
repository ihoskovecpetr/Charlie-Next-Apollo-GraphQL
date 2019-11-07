import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const isServer = typeof window === "undefined";

const Login = () => {
  if (isServer) {
    return <>about being heRE server Loading...</>;
  } else {
    return <Layout>Login PAge from server</Layout>;
  }
};

export default Login;
