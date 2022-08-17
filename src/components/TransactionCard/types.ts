export type Category = {
  name: string
  icon: string
}

export type TransactionProps = {
  title: string
  amount: string
  category: Category
  date: string
}

export type TransactionCardProps = {
  data: TransactionProps
}