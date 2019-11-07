import { withApollo } from "../apollo/client";
import gql from "graphql-tag";
import Link from "next/link";
import Head from "next/head";
import { useQuery } from "@apollo/react-hooks";
import fetch from "isomorphic-unfetch";

import Layout from "../components/Layout";

const showUsersQuery = gql`
  query {
    showUsers {
      id
      name
      email
    }
  }
`;
//const isServer = typeof window === "undefined";

const Index = props => {
  const { data } = useQuery(showUsersQuery);
  console.log("returning Index", data);
  if (data.showUsers) {
    console.log("If pass");
    return (
      <Layout>
        <h1>Batman TV Shows</h1>
        {data.showUsers.map(item => (
          <p>{item.name}</p>
        ))}
        {/* <ul>
          {props.shows.map(show => (
            <li key={show.id}>
              <Link href="/p/[id]" as={`/p/${show.id}`}>
                <a>{show.name}</a>
              </Link>
            </li>
          ))}
        </ul> */}
      </Layout>
    );
  } else {
    return (
      <Layout>
        <h1>Batman TV Shows</h1>
        no data yet
      </Layout>
    );
  }
};

// Index.getInitialProps = async function() {
//   const res = await fetch("https://api.tvmaze.com/search/shows?q=batman");
//   const data = await res.json();

//   console.log(`Show data fetched. Count: ${data.length}`);

//   return {
//     shows: data.map(entry => entry.show)
//   };
// };

export default withApollo(Index);
