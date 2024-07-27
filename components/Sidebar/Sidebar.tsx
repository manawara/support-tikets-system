'use client'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useContextHamburger } from '@/context/ContextHamburger'
import { signOutUser } from '@/actions/signOut'
import dashboardIcon from '@/public/dashboard_icon.svg'
import reportIcon from '@/public/report_icon.svg'
import settingIcon from '@/public/setting_icon.svg'
import signoutIcon from '@/public/signout_icon.svg'
import teamIcon from '@/public/team_icon.svg'
import ticketIcon from '@/public/ticket_icon.svg'
import SidebarItem from './SidebarItem'
import Hamburger from '@/components/Hamburger'

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
  const handleSignOut = async () => {
    await signOutUser()
  }
  const isMobile = windowWidth !== null && windowWidth < 500
  const isTablet = windowWidth !== null && windowWidth > 500

  const menuItems = [
    { icon: dashboardIcon, text: 'Dashboard', href: '/dashboard' },
    { icon: reportIcon, text: 'Reports', href: '/dashboard/reports' },
    { icon: ticketIcon, text: 'Tickets', href: '/dashboard/tickets' },
    { icon: teamIcon, text: 'Team', href: '/dashboard/team' },
  ]

  return (
    <>
      <div className="fixed top-0 left-0 z-20">
        <Hamburger className="mt-3 ml-1" />
      </div>
      <motion.aside
        initial={false}
        animate={isMobile ? { width: ctx.open ? 250 : 0 } : { width: ctx.open ? 250 : 64 }}
        transition={{ type: 'spring', stiffness: 300, damping: 25, staggerChildren: 0.5 }}
        className="fixed top-0 left-0 h-full max-h-screen py-4 bg-darkBlue text-white overflow-hidden sm:w-auto z-10 "
      >
        <nav className="px-4 pt-24 flex flex-col justify-between h-full  min-h-screen pb-4   border-solid border-r">
          <div>
            {menuItems.map((item, index) => (
              <SidebarItem key={index} item={item} isTablet={isTablet} />
            ))}
          </div>

          <div>
            <SidebarItem
              item={{ icon: settingIcon, text: 'Settings', href: '/dashboard/settings' }}
              isTablet={isTablet}
            />
            <SidebarItem
              item={{
                icon: signoutIcon,
                text: 'Sign Out',
                onClick: handleSignOut,
              }}
              isTablet={isTablet}
            />
          </div>
        </nav>
      </motion.aside>
    </>
  )
}

export default Sidebar
