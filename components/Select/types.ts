export type SelectItemData = {
  id: number
  name: string
}

export type SelectProps = {
  icon?: string
  data: SelectItemData[]
  placeholder?: string
  select?: string
  onClick?: (item: string) => void
}

export type SelectListProps = {
  data: SelectItemData[]
  onSelect: (item: string) => void
}

export type SelectItemProps = SelectItemData & {
  index: number
  onSelect: (item: string) => void
}
