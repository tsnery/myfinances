export type Category = {
  name: string
  icon: string
}

export type TransactionProps = {
  type: 'positive' | 'negative'
  title: string
  amount: string
  category: Category
  date: string
}

export type TransactionCardProps = {
  data: TransactionProps
}