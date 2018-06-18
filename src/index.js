import React from "react";
import ReactDOM from "react-dom";
import App from "./app.js";

function startApp() {
  ReactDOM.render(<App/>, document.getElementById('app'));
}

if (window.cordova) {
  document.addEventListener('deviceready', startApp, false);
  document.addEventListener("resume", function () { 
    codePush.sync(null, {
      updateDialog: {
        mandatoryUpdateMessage: "We have updated your app in the background.",
        appendReleaseDescription: false,
      },
      installMode: InstallMode.IMMEDIATE
    });    
  });  
} else {
  startApp();
}