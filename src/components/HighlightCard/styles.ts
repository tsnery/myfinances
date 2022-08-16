import styled from "styled-components/native";
import Feather from '@expo/vector-icons/Feather';
import { RFValue } from "react-native-responsive-fontsize";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  width: ${RFValue(300)}px;
  border-radius: 8px;
  
  padding: 20px 24px;
  padding-bottom: ${RFValue(42)}px;
  margin-right: 16px;
`

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
`

export const Title = styled.Text`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.text_dark};
`

export const Icon = styled(Feather)`
  font-size: ${RFValue(40)}px;
`

export const Footer = styled.View`

`

export const Amount = styled.Text`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text_dark};
  margin-top: 40px;
`

export const LastTransaction = styled.Text`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.text};
`