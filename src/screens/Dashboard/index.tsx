import React from "react";
import { ListRenderItem, View } from "react-native";
import {
  HighlightCard,
  TransactionCard,
  TransactionProps,
} from "../../components";
import * as Styles from "./styles";

export const Dashboard = () => {
  const data: TransactionProps[] = [
    {
      id: "1",
      type: "positive",
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      date: "10/04/2022",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
    },
    {
      id: "2",
      type: "negative",
      title: "Hamburgueria",
      amount: "R$ 59,00",
      date: "13/04/2022",
      category: {
        name: "Alimentação",
        icon: "coffee",
      },
    },
    {
      id: "3",
      type: "negative",
      title: "Aluguel do apartamento",
      amount: "R$ 2.000,00",
      date: "10/04/2022",
      category: {
        name: "Casa",
        icon: "shopping-bag",
      },
    },
  ];

  const renderItem: ListRenderItem<TransactionProps> = ({ item }) => (
    <TransactionCard data={item} />
  );

  const itemSeparator = () => <View style={{ height: 16 }} />;

  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.UserWrapper>
          <Styles.UserInfo>
            <Styles.Photo source={{ uri: "https://github.com/tsnery.png" }} />
            <Styles.User>
              <Styles.UserGreeting>Olá, </Styles.UserGreeting>
              <Styles.UserName>Tainan</Styles.UserName>
            </Styles.User>
          </Styles.UserInfo>
          <Styles.Icon name="power" />
        </Styles.UserWrapper>
      </Styles.Header>
      <Styles.ScrollCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Últimas entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </Styles.ScrollCards>
      <Styles.TransactionsContainer>
        <Styles.TransactionTitle>Listagem</Styles.TransactionTitle>
        <Styles.ScrollTransactions
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={renderItem}
          ItemSeparatorComponent={itemSeparator}
          showsVerticalScrollIndicator={false}
        />
      </Styles.TransactionsContainer>
    </Styles.Container>
  );
};
