export type BaseNavItem = {
  isClose?: boolean
  onClick?: (id: number) => void
}

export type NavItemType = {
  id: number
  name: string
  count: number
}

export type NavTicketProps = {
  items: NavItemType[]
  title: string
} & BaseNavItem
