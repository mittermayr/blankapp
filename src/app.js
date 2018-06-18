import React from "react";

import HomeScreen from "./screens/Home";
import "./app.css";

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentWillMount() {

  }

  render() {
    return (
      <HomeScreen/>
    );
  }
}
