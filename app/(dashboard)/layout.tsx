import Header from '@/components/Header/Header'
import Sidebar from '@/components/Sidebar/Sidebar'
import HamburgerProvider from '@/context/ContextHamburger'
import { ReactNode } from 'react'
const DashboardLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <HamburgerProvider>
        <Header />
        <Sidebar />
        {children}
      </HamburgerProvider>
    </main>
  )
}

export default DashboardLayout
