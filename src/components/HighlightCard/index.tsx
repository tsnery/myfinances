import * as Styles from "./styles";
import { HighlightCardProps } from "./types";

const icon = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
  total: "dollar-sign",
};

export function HighlightCard({
  amount,
  lastTransaction,
  title,
  type,
}: HighlightCardProps) {
  return (
    <Styles.Container type={type}>
      <Styles.Header>
        <Styles.Title type={type}>{title}</Styles.Title>
        <Styles.Icon name={icon[type]} type={type} />
      </Styles.Header>
      <Styles.Footer>
        <Styles.Amount type={type}>{amount}</Styles.Amount>
        <Styles.LastTransaction type={type}>
          {lastTransaction}
        </Styles.LastTransaction>
      </Styles.Footer>
    </Styles.Container>
  );
}
