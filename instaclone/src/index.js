import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';


export default function App() {
  return(
    <> {/* represents a fragment */}
      <StatusBar barStyle='dark-content' backgroundColor='#F9ECCC'/>
      <Routes />;
    </>
  )
}
