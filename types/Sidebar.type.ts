export type ItemType = {
  text: string
  icon: string
  href?: string
  onClick?: () => void
}

export type SidebarType = {
  isTablet: boolean
  item: ItemType
}
