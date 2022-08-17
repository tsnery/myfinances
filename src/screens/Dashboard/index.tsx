import React from "react";
import { HighlightCard } from "../../components";
import * as Styles from "./styles";

export const Dashboard = () => {
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
    </Styles.Container>
  );
};
