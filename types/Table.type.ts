import { PaginateType } from './Paginate.type'

export type ColumnType = {
  key: keyof Record<string, number>
  header: string
}
export type TableHeaderProps<T> = {
  columns: { key: keyof T; header: string }[]
}

export type TableType = {
  columns: ColumnType[]
  data: Record<string, any>[]
  namePage: string
  paginationOptions?: PaginateType
  loading?: boolean
  onDelete?: (id: string) => void
}
