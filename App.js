import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';


import Routes from './src/router';

export default function App() {
  return (
    <>
      <StatusBar style="ligth" backgroundColor='#000' translucent={false} />
      <Routes/>
    </>
  );
}


