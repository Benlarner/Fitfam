import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyA4LhPveg7PR_A9-jJxrVFPRCrnAM0_d_c",
  authDomain: "fitfam-21f35.firebaseapp.com",
  databaseURL: "https://fitfam-21f35.firebaseio.com",
  projectId: "fitfam-21f35",
  storageBucket: "fitfam-21f35.appspot.com",
  messagingSenderId: "162600591246",
  appId: "1:162600591246:web:43de2b34bc648c4a044edf",
  measurementId: "G-VXRLTL7RWX"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// Learn more about service workers: https://bit.ly/CRA-PWA
