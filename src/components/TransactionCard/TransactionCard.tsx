import * as Styles from "./styles";
import { TransactionCardProps } from "./types";

export function TransactionCard({ data }: TransactionCardProps) {
  return (
    <Styles.Container>
      <Styles.Title>{data.title}</Styles.Title>
      <Styles.Amount type={data.type}>
        {data.type === "negative" && "- "}
        {data.amount}
      </Styles.Amount>
      <Styles.Footer>
        <Styles.Category>
          <Styles.Icon name={data.category.icon} />
          <Styles.CategoryName>{data.category.name}</Styles.CategoryName>
        </Styles.Category>
        <Styles.Date>{data.date}</Styles.Date>
      </Styles.Footer>
    </Styles.Container>
  );
}
