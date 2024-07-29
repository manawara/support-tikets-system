export type DropItem = {
  id: number
  name: string
  href?: string
  onDelete?: () => void
}

export type DropDownType = {
  data: DropItem[]
}
