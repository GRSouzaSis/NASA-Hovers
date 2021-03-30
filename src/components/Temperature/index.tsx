import React, { useState } from 'react';
import { Switch } from 'react-native';
import { View } from 'react-native';
import palette from '../../assets/theme/palette';

 import { ViewHeader,
  TextHome,
  TextSol,
  TextSub,
  ViewTemp,
  ViewBody,
  ViewFooter,
  CardBody,

 } from './styles';

const Temperature: React.FC = () => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  return (
    <ViewTemp>
    <ViewHeader>
      <TextHome>LATEST WATHER AT ELYSIUM PLATITIA</TextHome>
    </ViewHeader>
    <ViewBody>
      <CardBody>
        <TextSol>Sol 377</TextSol>
        <TextSub>Marth 30</TextSub>
      </CardBody>
      <View style={{ borderRightWidth: 1, borderColor: palette.red }}></View>
      <CardBody>
        <TextSol>Temperature</TextSol>
        <TextSub>Hight: -20°C</TextSub>
        <TextSub>Low: -120°C</TextSub>
      </CardBody>
    </ViewBody>
    <ViewFooter>
      <TextSub style={{marginRight: 4}}>°C</TextSub>
     <Switch
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor={isEnabled ? "#f4f3f4" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isEnabled}
     />
     <TextSub>°F</TextSub>
    </ViewFooter>
  </ViewTemp>
  );
}

export default Temperature;
