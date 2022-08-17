import { FlatList, Image } from "react-native";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";
import Feather from "@expo/vector-icons/Feather";
import { TransactionProps } from "../../components";


export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};

  margin-bottom: 24px;
`

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.title};
`

export const Header = styled.View`
  flex-direction: row;
  align-items: flex-start;

  height: ${RFPercentage(42)}px;

  background-color: ${({ theme }) => theme.colors.primary};
`

export const UserWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  
  padding: 24px;
`

export const UserInfo = styled.View`
  flex-direction: row;
  flex: 1;
`

export const Photo = styled(Image)`
  width: ${RFValue(48)}px;
  height: ${RFValue(48)}px;
  border-radius: 10px;
`

export const User = styled.View`
  margin-left: 17px;
`

export const UserGreeting = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};
`

export const UserName = styled.Text`
  color: ${({ theme }) => theme.colors.shape};
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.bold};
`

export const Icon = styled(Feather)`
  color: ${({ theme }) => theme.colors.secondary};
  font-size: ${RFValue(24)}px;
`

export const ScrollCards = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingLeft: 24,
  },
  horizontal: true,
  showsHorizontalScrollIndicator: false
})`
  position: absolute;
  margin-top: ${RFPercentage(20)}px;
`

export const TransactionsContainer = styled.View`
  flex: 1;
  padding: 0 24px;

  margin-top: ${RFPercentage(12)}px;
`

export const TransactionTitle = styled.Text`
  font-size: ${RFValue(18)}px;
  font-family: ${({ theme }) => theme.fonts.regular};

  margin-bottom: 16px;
`

export const ScrollTransactions = (styled(
  FlatList as new () => FlatList<TransactionProps>
).attrs(props => ({
  showsVerticalScrollIndicator: false,
  ...props
}))`` as unknown) as typeof FlatList