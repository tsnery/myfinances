import styled, { css } from "styled-components/native";
import Feather from '@expo/vector-icons/Feather';
import { RFValue } from "react-native-responsive-fontsize";
import { HighlightCardProps } from "./types";

export const Container = styled.View <Pick<HighlightCardProps, 'type'>>`
  background-color: ${({ theme, type }) => type === 'total' ? theme.colors.secondary : theme.colors.shape};
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

export const Title = styled.Text <Pick<HighlightCardProps, 'type'>>`
  font-size: ${RFValue(14)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
`

export const Icon = styled(Feather) <Pick<HighlightCardProps, 'type'>>`
  font-size: ${RFValue(40)}px;
  ${({ type }) => type === 'up' && css`color: ${({ theme }) => theme.colors.success}`};
  ${({ type }) => type === 'down' && css`color: ${({ theme }) => theme.colors.attention}`};
  ${({ type }) => type === 'total' && css`color: ${({ theme }) => theme.colors.shape}`};
`

export const Footer = styled.View``

export const Amount = styled.Text <Pick<HighlightCardProps, 'type'>>`
  font-size: ${RFValue(32)}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text_dark};
  margin-top: 40px;
`

export const LastTransaction = styled.Text <Pick<HighlightCardProps, 'type'>>`
  font-size: ${RFValue(12)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme, type }) => type === 'total' ? theme.colors.shape : theme.colors.text};
`