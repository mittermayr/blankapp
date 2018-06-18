import React from "react";

export default class Demo extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      title: props.title
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({title: nextProps.title});
  }

  render() {
    return (
      <div style={{textAlign:"center", marginTop: 150}}>
        {this.state.title}
      </div>
    );
  }
}
