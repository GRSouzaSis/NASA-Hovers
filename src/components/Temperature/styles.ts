import styled from 'styled-components/native';
import palette from '../../assets/theme/palette';

export const ViewHeader = styled.View`
`;
export const ViewBody = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 16px;
`;
export const ViewFooter = styled.View`
  margin-top: 4px;
  flex-direction: row;
  align-items: center;
`;
export const ViewTemp = styled.View`
  background-color: rgba(0,0,0,0.5);
  padding: 16px;
  border-radius: 8px;
`;
export const TextHome = styled.Text`
  font-size: 16px;
  color: ${palette.red};
`;
export const CardBody = styled.View`
  padding-right: 8px;
`;

export const TextSol = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${palette.white};
`;
export const TextSub = styled.Text`
  font-size: 18px;
  color: ${palette.gray};
`;

