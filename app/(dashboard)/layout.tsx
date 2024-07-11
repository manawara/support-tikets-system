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
        <div className="mt-2 min-[500px]:ml-[64px]">{children}</div>
      </HamburgerProvider>
    </main>
  )
}

export default DashboardLayout
