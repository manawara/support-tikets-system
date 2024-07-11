import React from 'react'
import NavTicketItem from './NavTicketItem'

type NavItemType = {
  name: string
  count: number
}

type NavTicketProps = {
  items: NavItemType[]
  title: string
}

const NavTicketList = ({ items, title }: NavTicketProps) => {
  return (
    <div className="mt-4 px-4">
      <div className="font-semibold text-center">{title}</div>
      <ul className="py-2 mt-2 flex flex-wrap justify-center gap-4 text-sm">
        {items.map((item, index) => (
          <NavTicketItem key={index} {...item} index={index} />
        ))}
      </ul>
    </div>
  )
}

export default NavTicketList
