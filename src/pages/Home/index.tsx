import React from 'react';
import { Dimensions, ImageBackground, View } from 'react-native';
import nasaLogo from '../../assets/images/nasa-mars-logo.png';

const { width, height } = Dimensions.get('window');

const Home: React.FC = () => {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#fff',
      }}>
      <ImageBackground
        source={nasaLogo}
        resizeMode="contain"
        style={{ width: width - 16, height: height - 16 }}
      />
    </View>
  );
};

export default Home;
