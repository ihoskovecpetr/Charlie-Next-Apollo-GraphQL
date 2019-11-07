import Header from "./Header";
import Head from "next/head";

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: "1px solid #DDD"
};

const Layout = props => (
  <span style={layoutStyle}>
    <Head>
      <title>Charlie Next Graph Hook Index</title>
      <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyADHzQ7cTn3uwDBUMoROC2JFdzZ_gEAzvI&libraries=geometry,places"></script>
    </Head>
    <Header>{props.children}</Header>
  </span>
);

export default Layout;
