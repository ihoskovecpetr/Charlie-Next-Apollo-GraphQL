import React from "react";
import {
  Switch,
  Route,
  NavLink,
  BrowserRouter as Router
} from "react-router-dom";

import Event from "./event";

const ListOfUrls = ["xx", "event"];
const ListOfNames = ["Menu", "Event"];
const ListOfComponents = [
  //<Menu ListOfNames={ListOfNames} ListOfUrls={ListOfUrls} />,
  <Event />,
  <Event />
];

const returnComponent = index => {
  return <div className="content_wrap">{ListOfComponents[index]}</div>;
};

const DomRouter = props => {
  console.log();
  return (
    <Router>
      {props.children}
      <Switch>
        {ListOfUrls.map((text, index) => (
          <Route
            exact
            path={`/${text}`}
            key={index}
            render={() => <>{returnComponent(index)}</>}
          />
        ))}
      </Switch>
    </Router>
  );
};

export default DomRouter;
