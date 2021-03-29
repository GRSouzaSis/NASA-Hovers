import React from 'react';
import { View } from 'react-native';
import { ICircleProps } from './types';

import { Container, TextDescription, ImageHover } from './styles';

const Circle: React.FC<ICircleProps> = ({ description, onPress, uri }) => {
  return (
    <Container onPress={()=> onPress(description)}>
      <ImageHover source={{ uri: uri }} resizeMode="cover"/>
        <TextDescription>{description}</TextDescription>
    </Container>
  );
}

export default Circle;
