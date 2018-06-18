import React from "react";

import Demo from "../components/Demo";

export default class HomeScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount() {

  }

  render() {
    return (
      <div>
        <Demo title="Hello World"/>
      </div>
    );
  }
}
