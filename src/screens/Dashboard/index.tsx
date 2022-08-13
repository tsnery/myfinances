import React from "react";
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
    </Styles.Container>
  );
};
