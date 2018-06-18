import React from "react";

export default class Config extends React.Component {

  static production() {
    return {
      server_url: "",
    };
  }

  static development() {
    return {
      server_url: "",
    };
  }

  static current() {
    return this.production();
  }

}