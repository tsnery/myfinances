import * as Styles from "./styles";

export function HighlightCard() {
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>Entrada</Styles.Title>
        <Styles.Icon name="arrow-up-circle" />
      </Styles.Header>
      <Styles.Footer>
        <Styles.Amount>R$ 17.400,00</Styles.Amount>
        <Styles.LastTransaction>
          Última entrada dia 13 de abril
        </Styles.LastTransaction>
      </Styles.Footer>
    </Styles.Container>
  );
}
