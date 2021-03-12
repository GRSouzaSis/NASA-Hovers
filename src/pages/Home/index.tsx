import React from 'react';
import { Dimensions, ImageBackground, View } from 'react-native';



const { width, height } = Dimensions.get('window');

const Home: React.FC = () => {
    return (
        <View
            style={{ flex: 1, justifyContent: 'center', alignItems: 'center', padding: 16 , backgroundColor:'#fff'}}
        >
            <ImageBackground
                source={require('../../assets/images/nasa-mars-logo.png')}
                resizeMode="contain"
                style={{ width: width - 16, height: height - 16 }}
            />
        </View>
    );
}

export default Home;