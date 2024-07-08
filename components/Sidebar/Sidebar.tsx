'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { useContextHamburger } from '@/context/ContextHamburger'

import dashboardIcon from '@/public/dashboard_icon.svg'
import reportIcon from '@/public/report_icon.svg'
import settingIcon from '@/public/setting_icon.svg'
import signoutIcon from '@/public/signout_icon.svg'
import teamIcon from '@/public/team_icon.svg'
import ticketIcon from '@/public/ticket_icon.svg'
import SidebarItem from './SidebarItem'
import Hamburger from '../Hamburger'

const Sidebar = () => {
  const [windowWidth, setWindowWidth] = useState<number | null>(null)
  const ctx = useContextHamburger()

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  if (windowWidth === null) {
    return null
  }

  const isMobile = windowWidth < 500
  const isTablet = windowWidth >= 500

  const menuItems = [
    { icon: dashboardIcon, text: 'Dashboard', href: '/' },
    { icon: reportIcon, text: 'Reports', href: '/reports' },
    { icon: ticketIcon, text: 'Tickets', href: '/tickets' },
    { icon: teamIcon, text: 'Team', href: '/team' },
  ]

  return (
    <>
      <div className="flex items-center mt-2 ml-1 ">
        <Hamburger className="fixed top-0" />
        <motion.h1
          className="z-50 text-gray-50 ml-4"
          initial={false}
          animate={ctx.open ? { opacity: 1, display: 'block', x: [0, 10, 0] } : { opacity: 0, display: 'none', x: 0 }}
          transition={{
            delay: 0.2,
            duration: 0.3,
          }}
        >
          Support tickets
        </motion.h1>
      </div>

      <motion.aside
        initial={false}
        animate={isMobile ? { width: ctx.open ? 250 : 0 } : { width: ctx.open ? 250 : 64 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, staggerChildren: 0.5 }}
        className="fixed top-0 left-0 h-full max-h-screen py-4 bg-gray-800 text-white overflow-hidden sm:w-auto "
      >
        <nav className="px-4 pt-16 flex flex-col justify-between h-full">
          <div>
            {menuItems.map((item, index) => (
              <SidebarItem key={index} item={item} isTablet={isTablet} />
            ))}
          </div>

          <div>
            <SidebarItem item={{ icon: settingIcon, text: 'Settings', href: '/settings' }} isTablet={isTablet} />
            <SidebarItem item={{ icon: signoutIcon, text: 'Sign Out', href: '/signout' }} isTablet={isTablet} />
          </div>
        </nav>
      </motion.aside>
    </>
  )
}

export default Sidebar
