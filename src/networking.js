import React from "react";

export default class Networker extends React.Component {

  static handlePotentialError(response) {
    if (!response.ok) {
      throw Error(response.statusText);
    }
    return response;
  }

  static loadJSON(url) {
    var that = this;
    return new Promise(function(resolve, reject) {
      fetch(url)
        .then(that.handlePotentialError)
        .then(response => { resolve(response.json()); } )
        .catch(error => { console.log(error); reject(error); } );
    });
  }

  static postJSON(url, params) {
    var that = this;
    var jsonData = JSON.stringify(params);
    return new Promise(function(resolve, reject) {
      fetch(url, { method: 'POST', headers: { "Content-type": "application/json"}, body: jsonData })
        .then(that.handlePotentialError)
        .then(response => { resolve(response.json()); } )
        .catch(error => { console.log(error); reject(error); } );
    });
  }

  static getRequest(url) {
    var that = this;
    return new Promise(function(resolve, reject) {
      fetch(url)
        .then(that.handlePotentialError)
        .then(response => { resolve(response); } )
        .catch(error => { console.log(error); reject(error); } );
    });    
  }

}