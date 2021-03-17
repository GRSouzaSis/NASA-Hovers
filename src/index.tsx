import React from 'react';
import {StatusBar} from 'react-native';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#c95130" />
      <Routes />
    </>
  );
};

export default App;
