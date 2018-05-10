// src/app-client.js
import React from "react";
import ReactDOM from "react-dom";
import PhotoGallery from "./components/PhotoGallery";
 
  console.log('test');
  ReactDOM.hydrate(
    <PhotoGallery {...PhotoGallery.initialState} />,
    document.getElementById("PhotoGallery")
  );