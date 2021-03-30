import React, { useEffect, useState } from 'react';
import { ApiService } from '../../services/ApiService'
import { Photos } from './types';
import { Button, Switch, View } from 'react-native';
import palette from '../../assets/theme/palette';
import Circle from '../../components/Circle/indext';

import {
  Container,
  BackImage,
  ContainerBody,
  ContainerHeader,

} from './styles';
import Temperature from '../../components/Temperature';


const Home: React.FC = () => {
  const [photo, setPhoto] = useState<Photos[]>([])
  const [loading, setLoading] = useState(false);
  const api = new ApiService();

  useEffect(() => {
    // nameUrl();
  }, [])

  async function nameUrl() {
    api.getWeather();
  }

  // async function nameUrl() {
  //   let hover = 'curiosity'
  //   let sol = 1000
  //   let camera = 'fhaz'
  //   setLoading(true);
  //     const result = await api.getMarsPhoto(hover, sol, camera);
  //     setPhoto(result);
  //   setLoading(false);
  // }
  function showDescription(descri: string) {
    console.log("clicou", descri);
  }

  return (
    <Container>
      <BackImage source={require('../../assets/images/mars_home.jpg')} resizeMode='cover'>
        <ContainerHeader >
          <Circle
            description='Spirit'
            index={1}
            onPress={showDescription}
            uri="https://i.pinimg.com/originals/6e/27/21/6e2721374bd9f50239276d7d7ca15ba8.jpg"
          />

          <Circle
            description='Curiosity'
            index={1}
            onPress={showDescription}
            uri="https://www.spaceanswers.com/wp-content/uploads/2013/01/Curiosity-Power.jpg"
          />

          <Circle
            description='Opportunity'
            index={1}
            onPress={showDescription}
            uri="https://img.ibxk.com.br//2019/02/13/13200647780273.jpg?w=1200&h=675&mode=crop&scale=both"
          />

        </ContainerHeader>

        <ContainerBody>
          <Temperature />

        </ContainerBody>

      </BackImage>
    </Container>
  );
};

export default Home;
