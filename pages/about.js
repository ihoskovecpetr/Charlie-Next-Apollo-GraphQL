import React from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const isServer = typeof window === "undefined";

const About = () => {
  if (isServer) {
    return <>about being heRE server Loading...</>;
  } else {
    return <Layout>About PAge from server</Layout>;
  }
};

export default About;

// import React from 'react'
// import styled from 'styled-components'

// const About = () => (
//   <Container>
//     <Heading>hi there</Heading>
//   </Container>
// )

// const Container = styled.div`
//   width: 960px;
//   height: 100vh;
//   margin: 2rem auto;
//   padding: 2rem;
//   background: #f2f2f2;
// `

// const Heading = styled.h1``

// export default About
