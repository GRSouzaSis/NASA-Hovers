import React, { useEffect } from 'react';
import { Button, Dimensions, ImageBackground, Text, TouchableOpacity, View } from 'react-native';
import nasaLogo from '../../assets/images/nasa-mars-logo.png';

import { ApiService } from '../../services/ApiService'

const { width, height } = Dimensions.get('window');



const Home: React.FC = () => {

const api = new ApiService();

useEffect(()=>{
  nameUrl();
},[])

async function nameUrl() {
  let hover = 'curiosity'
  let sol = 1000
  let camera = 'fhaz'
  const result = await api.getMarsPhoto(hover, sol, camera);

  console.log("Index result", result);
}

  return (
    <View style={{flex: 1, padding: 16}}>

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
    </View>
  );
};

export default Home;
