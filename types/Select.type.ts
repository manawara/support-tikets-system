export type SelectItemData = {
  id: number
  name: string
}

export type SelectProps = {
  name?: string | undefined
  value?: string | undefined
  label?: string
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
