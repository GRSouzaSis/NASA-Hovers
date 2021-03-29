import styled from 'styled-components/native';
import palette from '../../assets/theme/palette';

export const Container = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  flex: 1;
`;

export const TextDescription = styled.Text`
  font-size: 16px;
  color: ${palette.white};
  font-weight: bold;
  text-align: center;
`;

export const ImageHover = styled.Image`
  width: 50px;
  height: 50px;
  background-color: ${palette.primary};
  border-radius: 30px;
`;

