import React from 'react'
import NavListItem from './NavListItem'
import { NavTicketProps } from '@/types/NavList.type'

const NavList = ({ items, title, isClose, onClick }: NavTicketProps) => {
  return (
    <div className="mt-4 px-4">
      <div className="font-semibold text-center">{title}</div>
      <ul className="py-2 mt-2 grid  grid-cols-2 sm:flex flex-wrap justify-center gap-4 text-sm">
        {items.map((item) => (
          <NavListItem key={item.id} {...item} isClose={isClose} onClick={onClick} />
        ))}
      </ul>
    </div>
  )
}

export default NavList
