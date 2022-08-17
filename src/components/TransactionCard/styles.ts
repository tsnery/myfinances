import styled from "styled-components/native";
import Feather from '@expo/vector-icons/Feather';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 5px;

  padding: 16px 24px;
`

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color:${({ theme }) => theme.colors.text_dark};
`

export const Amount = styled.Text`
  font-size: ${RFValue(20)}px;
  margin-top: 2px;
  color:${({ theme }) => theme.colors.text_dark};
`
export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  
  margin-top: 20px;
`

export const Category = styled.View`
  flex-direction: row;
  align-items: center;
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(20)}px;
  color: ${({ theme }) => theme.colors.text};
`

export const CategoryName = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};

  margin-left: 16px;
`

export const Date = styled.Text`
  font-size: ${RFValue(14)}px;
  color: ${({ theme }) => theme.colors.text};
`